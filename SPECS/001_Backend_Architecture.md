# 01_Backend_Architecture.md

## Responsible CHOIRBOIS Conductor(s)
- SUPER_CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
- SUPER_CONDUCTORS/PRODUCT_CONDUCTOR
- SUPER_CONDUCTORS/PROJECT_CONDUCTOR

## Overview
DreamAngo is a commercial intelligence platform built using Django and modern cloud technologies. The backend architecture is designed to be scalable, secure, and maintainable, with a focus on RESTful API development and cloud-native deployment.

## Tech Stack
- Python Version: 3.11 (as per Dockerfile)
- Django Version: 5.2.1+
- Django REST Framework Version: 3.14.0+
- Database: Google PostgreSQL (Cloud SQL)
- Environment Management: Conda
- Cloud Services: Google Cloud Platform (GCP)
- Key Dependencies:
  - gunicorn: 21.2.0+ (Production WSGI server)
  - python-decouple: 3.8+ (Environment variable management)
  - django-cors-headers: 4.3.1+ (Cross-Origin Resource Sharing)
  - whitenoise: 6.6.0+ (Static file serving)
  - django-storages: 1.14.2+ (Cloud storage integration)
  - google-cloud-storage: 2.14.0+ (GCS integration)
  - google-cloud-secret-manager: 2.18.0+ (Secrets management)

## Key Components / Modules
1. **API Layer**
   - RESTful endpoints using Django REST Framework
   - CORS support for frontend integration
   - Rate limiting and request validation

2. **Configuration**
   - Environment-based settings management
   - Secret management via Google Secret Manager
   - Dynamic configuration loading

3. **Authentication & Authorization**
   - JWT-based authentication
   - Role-based access control
   - API key management

4. **Storage**
   - Google Cloud Storage integration
   - Local static file serving
   - Media file management

## Data Models (High Level)
1. **Core Models**
   - User authentication models
   - API key management
   - Configuration settings

2. **Cloud Integration Models**
   - Storage configurations
   - Secret references
   - Environment settings

## Authentication & Authorization
- JWT-based token authentication
- Role-based access control
- API key validation
- CORS policy enforcement

## Error Handling & Logging
- Structured logging with Python logging module
- Error tracking and monitoring
- Request/response logging
- Security event logging

## Deployment & Infrastructure
- Docker-based containerization
- Google Cloud Run deployment
- Environment-specific configurations
- CI/CD pipeline integration

## Security Features
- Environment variable isolation
- Secret management integration
- Secure database connections
- HTTPS enforcement
- Input validation and sanitization
