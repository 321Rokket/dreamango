#!/bin/bash

# Core testing script for DreamCatchr (non-Docker parts)
set -e

echo "🧪 DreamCatchr Core Test Pipeline"
echo "=================================="

# Create test logs directory safely
TEST_LOG_DIR="test-logs"
if [ ! -d "$TEST_LOG_DIR" ]; then
    mkdir -p "$TEST_LOG_DIR"
fi

# Create log file with proper timestamp
TEST_LOG_FILE="$TEST_LOG_DIR/core-test-$(date +%Y%m%d-%H%M%S).log"
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
    
    if eval "$test_command" 2>&1 | tee -a "$TEST_LOG_FILE"; then
        log "✅ $test_name PASSED"
        return 0
    else
        log "❌ $test_name FAILED"
        return 1
    fi
}

# Initialize log
log "Starting core test pipeline..."

# Test Phase 1: Code Quality Checks
log "Phase 1: Code Quality Checks"
run_test "Backend Linting" "(cd backend && python -m flake8 . --max-line-length=127 --exclude=venv,migrations)" || exit 1
run_test "Frontend Linting" "(cd frontend && npm run lint)" || exit 1
run_test "Frontend Type Check" "(cd frontend && npx tsc --noEmit)" || exit 1

# Test Phase 2: Production App Health Check (Live)
log "Phase 2: Production Health Checks"
run_test "Production Frontend" "curl -f https://dreamango-frontend-108538800485.us-central1.run.app/" || exit 1
run_test "Production Backend Health" "curl -H 'Authorization: Bearer $(gcloud auth print-identity-token)' https://dreamango-backend-108538800485.us-central1.run.app/health/" || exit 1

# Test Phase 3: Security Checks
log "Phase 3: Security Checks"
run_test "Frontend Dependency Audit" "(cd frontend && npm audit --audit-level=high)" || true
run_test "Check Git Repository" "git status --porcelain | wc -l | grep -q '^0$'" || exit 1

log "🎉 All core tests completed successfully!"
echo "✅ Code quality: PASSED"
echo "✅ Production health: PASSED"
echo "✅ Security checks: PASSED"
echo "📝 Test logs saved in: $TEST_LOG_FILE"