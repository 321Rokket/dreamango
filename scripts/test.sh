#!/bin/bash

# Enterprise-grade testing script for DreamCatchr
set -e

echo "🧪 DreamCatchr Testing Pipeline"
echo "==============================="

# Create test logs directory safely
TEST_LOG_DIR="test-logs"
if [ ! -d "$TEST_LOG_DIR" ]; then
    mkdir -p "$TEST_LOG_DIR"
fi

# Create log file with proper timestamp
TEST_LOG_FILE="$TEST_LOG_DIR/test-pipeline-$(date +%Y%m%d-%H%M%S).log"
touch "$TEST_LOG_FILE"

# Function to log with timestamp
log() {
    local message="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo "$message"
    if [ -f "$TEST_LOG_FILE" ]; then
        echo "$message" >> "$TEST_LOG_FILE"
    fi
}

# Function to run tests and capture exit code
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    log "Starting $test_name..."
    
    if eval "$test_command"; then
        log "✅ $test_name PASSED"
        return 0
    else
        log "❌ $test_name FAILED"
        return 1
    fi
}

# Test Phase 1: Linting and Type Checking
log "Phase 1: Code Quality Checks"
run_test "Backend Linting" "(cd backend && python -m flake8 . --max-line-length=127 --exclude=venv,migrations)" || exit 1
run_test "Frontend Linting" "(cd frontend && npm run lint)" || exit 1
run_test "Frontend Type Check" "(cd frontend && npx tsc --noEmit)" || exit 1

# Test Phase 2: Unit Tests in Containers
log "Phase 2: Unit Tests"
run_test "Backend Tests" "docker compose --profile test up --build --abort-on-container-exit backend-test" || exit 1
run_test "Frontend Tests" "docker compose --profile test up --build --abort-on-container-exit frontend-test" || exit 1

# Test Phase 3: Integration Tests
log "Phase 3: Integration Tests"
run_test "Health Check Tests" "docker compose up -d && sleep 30 && curl -f http://localhost:8000/health/ && curl -f http://localhost:80/" || exit 1

# Test Phase 4: Security Checks
log "Phase 4: Security Checks"
run_test "Dependency Audit Frontend" "(cd frontend && npm audit --audit-level=high)" || exit 1
run_test "Docker Image Security" "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/path bitnami/trivy:latest image dreamango-backend:latest" || true

# Cleanup
log "Cleaning up test environment..."
docker compose down -v

log "🎉 All tests completed successfully!"
echo "Test logs saved in $TEST_LOG_FILE"
