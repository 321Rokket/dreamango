# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

**Dreamcatchr/Dreamango** is a full-stack application with Django REST Framework backend and React TypeScript frontend, containerized for Google Cloud Run deployment.

### Backend Structure
- Django 5.2+ with DRF in `/backend/`
- PostgreSQL database with psycopg2-binary
- Google Cloud Storage integration
- Settings in `backend/config/settings.py` with environment-based configuration
- Main URLs in `backend/config/urls.py`, API URLs in `backend/api/urls.py`

### Frontend Structure  
- React 19.1 + TypeScript 5.8 + Vite 6.3 in `/frontend/`
- Tailwind CSS 4.1 with DaisyUI 5.0 for styling
- ESLint 9.25 with TypeScript support
- Development server runs on port 5175

## Common Development Commands

### Local Development Setup
```bash
# Full Docker setup
./scripts/setup.sh
docker-compose up --build

# Direct development (requires local dependencies)
cd backend && python manage.py runserver 8000
cd frontend && npm run dev
```

### Frontend Commands
```bash
npm run dev          # Development server
npm run build        # Production build  
npm run lint         # ESLint check
npm run preview      # Preview built app
```

### Backend Commands
```bash
python manage.py runserver     # Development server
python manage.py migrate       # Run database migrations
python manage.py collectstatic # Collect static files
python manage.py createsuperuser # Create admin user
```

### Deployment
```bash
./deploy.sh          # Full GCP deployment
```

### Production URLs
- **Frontend (Public):** https://dreamango-frontend-108538800485.us-central1.run.app
- **Backend (Private):** https://dreamango-backend-108538800485.us-central1.run.app
- **Health Check:** https://dreamango-backend-108538800485.us-central1.run.app/health/
- **API Status:** https://dreamango-backend-108538800485.us-central1.run.app/api/status/

### Access Requirements
- Frontend: Public access (no authentication required)
- Backend: Requires Google Cloud authentication (use `gcloud auth print-identity-token`)

## Development Patterns

### CHOIRBOIS Project Management
This project uses the CHOIRBOIS system with hierarchical conductors for AI-assisted development. Documentation and templates are in `/SPECS/` and `/CHOIRBOIS/`.

### Configuration Management
- Environment variables managed via python-decouple
- Development vs production settings in Django
- GCP credentials and project configuration required for cloud features

### Docker Architecture
- Multi-stage builds for both frontend and backend
- Frontend uses nginx for serving static files in production
- Backend uses gunicorn with optimized worker configuration

## Key Configuration Files

- `backend/config/settings.py` - Django settings with environment-based config
- `frontend/vite.config.ts` - Vite build configuration
- `docker-compose.yml` - Local development orchestration
- `.github/workflows/ci.yml` - CI/CD pipeline for staging/production

## Testing Commands

Currently, testing infrastructure is set up but tests need implementation:
- Backend: Uses pytest framework
- Frontend: Test placeholder exists
- Run CI/CD pipeline includes testing steps

## Requirements

- Python 3.11+ and Node.js 18+ for direct development
- Docker and Docker Compose for containerized development
- Google Cloud Platform project with appropriate credentials for cloud features