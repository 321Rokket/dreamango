# Enterprise CI/CD Deployment Workflow

## Overview

This document outlines the testing and deployment pipeline for DreamCatchr, designed for enterprise-grade reliability while being cost-effective for startups.

## Architecture

```
Local Dev → Tests → Git Push → GitHub Actions → Staging → Production
    ↓          ↓         ↓            ↓            ↓         ↓
   Tests    Logs      Tests      Build & Test   Validate  Deploy
```

## 1. Local Development Workflow

### Pre-Commit Testing (Required)
```bash
# Run full test suite locally
./scripts/test.sh

# Or run specific test phases
docker-compose --profile test up --build  # Unit tests
docker-compose up -d && ./scripts/integration-test.sh  # Integration tests
```

### What Gets Tested Locally:
- ✅ Code quality (linting, type checking)
- ✅ Unit tests (backend Django, frontend React)  
- ✅ Integration tests (API endpoints, health checks)
- ✅ Security scans (dependency audit, container scanning)
- ✅ Database migrations
- ✅ Docker container builds

### Test Logs (Not Committed):
```
test-logs/
├── test-pipeline-20250523.log     # Main pipeline log
├── backend-test-20250523.log      # Backend test results
├── frontend-test-20250523.log     # Frontend test results
├── security-scan-20250523.log     # Security audit results
└── integration-20250523.log       # Integration test results
```

## 2. Git Workflow

### Branch Strategy:
- `develop` → Development and feature work
- `staging` → Pre-production testing
- `main` → Production releases

### Pre-Push Requirements:
```bash
# All tests must pass before pushing
./scripts/test.sh || exit 1
git push origin develop
```

## 3. GitHub Actions Pipeline

### Phase 1: Code Quality & Security (1-2 min)
```yaml
- Backend linting (flake8)
- Frontend linting (ESLint)  
- Type checking (TypeScript)
- Security scanning (bandit, safety, npm audit)
- Dependency vulnerability check
```

### Phase 2: Unit Tests (3-5 min)
```yaml
- Backend tests in isolated container
- Frontend tests with coverage
- Database migration tests
- API endpoint unit tests
```

### Phase 3: Integration Tests (5-7 min)
```yaml
- Full stack container deployment
- Health check validation
- API integration tests
- Cross-service communication tests
```

### Phase 4: Build & Security (3-5 min)
```yaml
- Docker image builds
- Container security scanning
- Image vulnerability assessment
- Registry push (if all tests pass)
```

## 4. Deployment Strategy

### For Startups (Cost-Efficient):
```
Local Tests → GitHub Actions → Blue/Green Deploy to Production
                     ↓
                Staging Tests (same environment)
```

**Benefits:** 
- Single environment (cost-effective)
- Blue/green deployment ensures zero downtime
- Staging tests in production environment

### For Enterprises (High Reliability):
```
Local Tests → GitHub Actions → Staging → Pre-Prod → Production
                     ↓            ↓         ↓          ↓
               Full Test Suite  User Tests  Approval  Deploy
```

**Benefits:**
- Multiple environment validation
- User acceptance testing
- Manual approval gates
- Comprehensive monitoring

## 5. Current Implementation

### Test Commands:
```bash
# Local development testing
./scripts/test.sh                    # Full test suite
docker-compose --profile test up     # Unit tests only
npm run test:coverage               # Frontend tests with coverage
python manage.py test               # Backend tests

# CI/CD automated testing
git push origin staging             # Triggers staging deployment  
git push origin main               # Triggers production deployment
```

### Deployment Triggers:

**Automatic (Staging):**
- Push to `staging` branch
- All tests pass → Deploy to staging Cloud Run
- Staging health checks → Notify team

**Manual (Production):**
- Push to `main` branch  
- All tests pass → Build images
- Manual approval required → Deploy to production
- Production health checks → Monitor

## 6. Security & Best Practices

### Container Security:
- Multi-stage Docker builds
- Non-root users in containers
- Security scanning with Trivy/Snyk
- Dependency vulnerability monitoring

### Secret Management:
- Google Secret Manager for production secrets
- Environment-specific configurations
- No secrets in containers or git

### Monitoring:
- Cloud Run native logging
- Health check endpoints
- Performance monitoring
- Error tracking and alerting

## 7. Failure Handling

### Test Failures:
```bash
# Tests fail → No deployment
# Logs stored in GitHub Actions artifacts
# Email/Slack notifications to team
# Rollback procedures documented
```

### Deployment Failures:
```bash
# Health checks fail → Automatic rollback
# Traffic routing preserved during deployments
# Database migration rollback procedures
# Emergency contact procedures
```

## 8. Cost Optimization

### Startup Mode:
- Single staging/production environment
- Shared Cloud Run services with traffic splits
- Basic monitoring (Cloud Run built-in)
- Cost: ~$20-50/month

### Enterprise Mode:
- Dedicated environments (dev, staging, pre-prod, prod)
- Advanced monitoring and alerting
- Multiple regions for redundancy  
- Cost: ~$200-500/month

## 9. Getting Started

### Setup:
```bash
# Initialize testing environment
chmod +x scripts/test.sh
docker-compose --profile test build

# Configure GitHub secrets:
# - GCP_PROJECT_ID
# - GCP_SA_KEY  
# - SNYK_TOKEN (optional)

# Test the pipeline
./scripts/test.sh
git push origin develop
```

### Team Workflow:
1. **Developers**: Run `./scripts/test.sh` before every commit
2. **Code Review**: All PRs require passing tests
3. **Deployment**: Only `staging` and `main` branches deploy
4. **Monitoring**: Check Cloud Run logs and health dashboards

This workflow ensures zero-downtime deployments with enterprise-grade testing while remaining cost-effective for startups.