# Branching Strategy and Testing Workflow

## Branch Structure

### Main Branches
- `main` - Production branch, always stable and deployable
- `staging` - Pre-production branch for final testing
- `develop` - Integration branch for feature development

### Supporting Branches
- `feature/*` - Feature branches branched from `develop`
- `bugfix/*` - Bug fix branches branched from `develop`
- `hotfix/*` - Hot fix branches branched from `main`
- `release/*` - Release preparation branches branched from `develop`

## Branch Lifecycle

### Feature Development
1. Create feature branch from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```
2. Develop and test locally
3. Push to remote and create PR to `develop`
4. After review and approval, merge to `develop`

### Bug Fixes
1. Create bugfix branch from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b bugfix/issue-description
   ```
2. Fix and test locally
3. Push to remote and create PR to `develop`
4. After review and approval, merge to `develop`

### Hot Fixes
1. Create hotfix branch from `main`
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/issue-description
   ```
2. Fix and test locally
3. Push to remote and create PRs to both `main` and `develop`
4. After review and approval, merge to both branches

### Release Process
1. Create release branch from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.0.0
   ```
2. Final testing and version bumping
3. Create PRs to both `main` and `develop`
4. After approval, merge to both branches

## Testing Workflow

### Local Development
1. Run backend tests:
   ```bash
   cd backend
   python manage.py test
   ```
2. Run frontend tests:
   ```bash
   cd frontend
   npm test
   ```
3. Run linting:
   ```bash
   # Backend
   flake8
   # Frontend
   npm run lint
   ```

### CI/CD Pipeline (GitHub Actions)

#### On Every Push to `develop`:
1. Backend:
   - Install dependencies
   - Run linting (flake8)
   - Run unit tests (pytest)
   - Build Docker image
   - Push to staging registry

2. Frontend:
   - Install dependencies
   - Run linting (ESLint)
   - Run unit tests (Jest)
   - Build production assets
   - Build Docker image
   - Push to staging registry

#### On Every Push to `main`:
1. All steps from `develop` pipeline
2. Additional integration tests
3. Security scanning
4. Push to production registry
5. Deploy to staging environment

#### On Release to Production:
1. All steps from `main` pipeline
2. Performance testing
3. User acceptance testing
4. Deploy to production environment

## Testing Requirements

### Backend Tests
- Unit tests (pytest)
- Integration tests
- API endpoint tests
- Database migration tests
- Security tests

### Frontend Tests
- Unit tests (Jest)
- Component tests
- Integration tests
- E2E tests (Cypress)
- Accessibility tests
- Performance tests

### Quality Gates
1. All tests must pass
2. Code coverage > 80%
3. No critical security vulnerabilities
4. No linting errors
5. Performance benchmarks met
6. Accessibility standards met

## Deployment Environments

### Development
- Branch: `develop`
- Environment: Development
- Auto-deploy on push
- Testing: Unit tests, linting

### Staging
- Branch: `staging`
- Environment: Staging
- Manual deployment
- Testing: Integration tests, security scans

### Production
- Branch: `main`
- Environment: Production
- Manual deployment
- Testing: Full test suite, performance tests

## Version Control Best Practices

1. Always pull latest changes before creating new branch
2. Keep branches up to date with their parent branch
3. Use meaningful branch names
4. Write clear commit messages
5. Keep PRs focused and manageable
6. Require code review before merging
7. Squash commits when merging to main branches 