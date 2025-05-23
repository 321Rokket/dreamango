#!/bin/bash

# Quick testing script for DreamCatchr (code quality only)
set -e

echo "🧪 DreamCatchr Quick Test Pipeline"
echo "==================================="

# Create test logs directory safely
TEST_LOG_DIR="test-logs"
if [ ! -d "$TEST_LOG_DIR" ]; then
    mkdir -p "$TEST_LOG_DIR"
fi

# Create log file with proper timestamp
TEST_LOG_FILE="$TEST_LOG_DIR/quick-test-$(date +%Y%m%d-%H%M%S).log"

# Function to log with timestamp
log() {
    local message="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo "$message"
    echo "$message" >> "$TEST_LOG_FILE"
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
log "Starting quick test pipeline..."

# Test Phase 1: Code Quality Checks
log "Phase 1: Code Quality Checks"

# Backend linting
if run_test "Backend Linting" "cd backend && python -m flake8 . --max-line-length=127 --exclude=venv,migrations,staticfiles"; then
    echo "✅ Backend linting passed"
else
    echo "❌ Backend linting failed"
    echo "Check $TEST_LOG_FILE for details"
    exit 1
fi

# Frontend linting
if run_test "Frontend Linting" "cd frontend && npm run lint"; then
    echo "✅ Frontend linting passed"
else
    echo "❌ Frontend linting failed"
    echo "Check $TEST_LOG_FILE for details"
    exit 1
fi

# TypeScript checking
if run_test "TypeScript Check" "cd frontend && npx tsc --noEmit"; then
    echo "✅ TypeScript check passed"
else
    echo "❌ TypeScript check failed"
    echo "Check $TEST_LOG_FILE for details"
    exit 1
fi

log "🎉 All quick tests completed successfully!"
echo "✅ Code quality checks: ALL PASSED"
echo "📝 Test logs saved in: $TEST_LOG_FILE"
echo ""
echo "To run full test suite with Docker containers:"
echo "  ./scripts/test.sh"