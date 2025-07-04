# DreamCatchr/Dreamango

A full-stack Django + React application deployed on Google Cloud Run.

## =� Live Application

- **Frontend:** https://dreamango-frontend-108538800485.us-central1.run.app
- **Backend API:** https://dreamango-backend-108538800485.us-central1.run.app

## Architecture

- **Backend:** Django 5.2+ with DRF, deployed on Cloud Run
- **Frontend:** React 19.1 + TypeScript + Vite, deployed on Cloud Run  
- **Database:** SQLite (development), PostgreSQL ready for production
- **Infrastructure:** Google Cloud Run with Terraform
- **CI/CD:** GitHub Actions with automated testing and deployment

## Quick Start

### Local Development
```bash
# Full Docker setup
docker-compose up --build

# Direct development
cd backend && python manage.py runserver 8000
cd frontend && npm run dev
```

### Deployment
```bash
./deploy.sh  # Deploy to Google Cloud Run
```

## Project Structure

```
   backend/          # Django REST API
   frontend/         # React TypeScript app  
   terraform/        # Infrastructure as code
   .github/          # CI/CD workflows
   SPECS/           # Project documentation
   deploy.sh        # Deployment script
```

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Development guide for AI assistants
- [GCP_SECURITY_SETUP.md](./GCP_SECURITY_SETUP.md) - Security and deployment guide
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Deployment status and checklist

## Development

See [CLAUDE.md](./CLAUDE.md) for detailed development instructions and common commands.