# 07_Local_Development_Environment.md

## Responsible CHOIRBOIS Conductor(s)
- SUPER_CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
- SUPER_CONDUCTORS/PROJECT_CONDUCTOR

## Overview
This document provides a comprehensive guide for setting up the local development environment for the DreamAngo platform.

## Current Status
- Complete: 100%
- Environment setup: Complete
- Development tools: Complete
- Testing setup: Complete
- Documentation: Complete

## Prerequisites
- Git
- Python 3.11
- Node.js 19.1.0
- Docker and Docker Compose
- Conda environment management
- IDE of choice (VS Code recommended)

## Environment Setup

### Backend Setup
1. **Conda Environment**
   ```bash
   # Create conda environment
   conda create -n rokket python=3.11
   conda activate rokket

   # Install dependencies
   pip install -r requirements.txt
   ```

2. **Database Setup**
   - Install PostgreSQL
   - Create development database
   - Configure database settings in `.env`

3. **Run Backend**
   ```bash
   # Run migrations
   python manage.py migrate

   # Collect static files (for development)
   python manage.py collectstatic --noinput

   # Run development server
   python manage.py runserver
   ```

### Frontend Setup
1. **Node Environment**
   ```bash
   # Install dependencies
   cd frontend
   npm install
   ```

2. **Run Frontend**
   ```bash
   # Start development server
   npm run dev
   ```

## Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
DEBUG=True
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
ALLOWED_HOSTS=localhost,127.0.0.1
```

## Development Workflow
1. **Branching Strategy**
   - `main`: Production code
   - `staging`: Staging environment
   - `develop`: Development branch
   - Feature branches: `feature/your-feature-name`

2. **Commit Messages**
   Follow conventional commits format:
   ```
   feat: add new feature
   fix: fix bug
   docs: update documentation
   style: formatting changes
   refactor: code change (no bug fix or feature)
   test: adding missing tests
   chore: maintenance
   ```

## Testing
- Backend: pytest, pytest-django, pytest-cov
- Frontend: Jest + React Testing Library
- Type checking: TypeScript

## Code Quality
- Backend: flake8, black
- Frontend: ESLint, Prettier
- Type checking: TypeScript

## Security
- Environment variable isolation
- Secret management
- HTTPS enforcement
- Input validation

## Monitoring & Debugging
- Django debug toolbar
- React developer tools
- Browser developer tools
- Performance monitoring

## Common Development Tasks

### Backend
```bash
# Run tests
pytest

# Check code style
flake8 .

# Format code
black .

# Check type hints
mypy .

# Run coverage
pytest --cov=.
```

### Frontend
```bash
# Run tests
npm test

# Check code style
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

## Known Issues
- Docker disk space management
- Environment variable consistency

## Next Steps
1. Add more automated testing
2. Enhance performance monitoring
3. Improve documentation
4. Add additional security measures
