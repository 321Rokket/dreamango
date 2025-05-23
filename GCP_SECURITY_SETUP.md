# GCP Security Setup and DevSecOps Best Practices

## Prerequisites

1. **Authenticate with GCP:**
```bash
gcloud auth login
gcloud config set project d-vussci-prd-spzr
```

2. **Enable Required APIs:**
```bash
gcloud services enable run.googleapis.com
gcloud services enable iam.googleapis.com
gcloud services enable secretmanager.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

## Service Account Setup (Least Privilege)

### 1. Create Deployment Service Account
```bash
# Create service account for CI/CD
gcloud iam service-accounts create dreamcatchr-cicd \
    --display-name="DreamCatchr CI/CD Service Account" \
    --description="Service account for automated deployments"
```

### 2. Grant Minimal Required Permissions
```bash
# Cloud Run permissions
gcloud projects add-iam-policy-binding d-vussci-prd-spzr \
    --member="serviceAccount:dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com" \
    --role="roles/run.admin"

# Container Registry permissions
gcloud projects add-iam-policy-binding d-vussci-prd-spzr \
    --member="serviceAccount:dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

# Secret Manager permissions
gcloud projects add-iam-policy-binding d-vussci-prd-spzr \
    --member="serviceAccount:dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com" \
    --role="roles/secretmanager.admin"

# IAM permissions for Cloud Run service setup
gcloud projects add-iam-policy-binding d-vussci-prd-spzr \
    --member="serviceAccount:dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"
```

### 3. Create and Download Service Account Key
```bash
gcloud iam service-accounts keys create ./dreamcatchr-cicd-key.json \
    --iam-account=dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com
```

## Secret Management

### 1. Create Secrets in Secret Manager
```bash
# Django secret key
echo -n "$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')" | \
gcloud secrets create django-secret-key-prod --data-file=-

# Database URL (replace with actual connection string)
echo -n "postgresql://user:password@host:port/dbname" | \
gcloud secrets create database-url-prod --data-file=-

# Allowed hosts
echo -n "dreamango-frontend-*.run.app,dreamango-backend-*.run.app" | \
gcloud secrets create allowed-hosts-prod --data-file=-
```

### 2. Set Up GitHub Secrets
Add these secrets to your GitHub repository settings:

- `GCP_PROJECT_ID`: `d-vussci-prd-spzr`
- `GCP_SA_KEY`: Contents of `dreamcatchr-cicd-key.json`
- `SNYK_TOKEN`: Your Snyk API token for security scanning

## Infrastructure Deployment

### 1. Initialize Terraform
```bash
cd terraform
terraform init
```

### 2. Plan and Apply Infrastructure
```bash
# For production environment
terraform plan -var="gcp_project_id=d-vussci-prd-spzr" -var="environment=prod"
terraform apply -var="gcp_project_id=d-vussci-prd-spzr" -var="environment=prod"
```

## Security Best Practices Implemented

### 1. Container Security
- ✅ Non-root user in Docker containers
- ✅ Multi-stage builds to reduce attack surface
- ✅ Platform-specific builds for Cloud Run (linux/amd64)
- ✅ Security headers in nginx configuration

### 2. Network Security
- ✅ HTTPS enforcement via Cloud Run
- ✅ CORS configuration for API access
- ✅ Proxy timeouts to prevent DoS

### 3. Secret Management
- ✅ No hardcoded secrets in code or containers
- ✅ Google Secret Manager integration
- ✅ Least privilege access to secrets

### 4. Access Control
- ✅ Dedicated service accounts with minimal permissions
- ✅ Public access only where needed (frontend/API endpoints)
- ✅ IAM roles follow principle of least privilege

### 5. Monitoring and Logging
- ✅ Cloud Run native logging
- ✅ Health check endpoints
- ✅ Security scanning in CI/CD pipeline

## Deployment Process

### Manual Deployment
```bash
# Set environment variables
export GOOGLE_APPLICATION_CREDENTIALS="./dreamcatchr-cicd-key.json"
export GCP_PROJECT_ID="d-vussci-prd-spzr"

# Run deployment script
./deploy.sh
```

### Automated Deployment
- Push to `main` branch triggers production deployment
- Push to `staging` branch triggers staging deployment
- All deployments include security scanning and testing

## Security Verification Commands

```bash
# Check service account permissions
gcloud iam service-accounts get-iam-policy dreamcatchr-cicd@d-vussci-prd-spzr.iam.gserviceaccount.com

# List secrets
gcloud secrets list --filter="name~dreamcatchr"

# Check Cloud Run service configuration
gcloud run services describe dreamango-backend --region=us-central1
gcloud run services describe dreamango-frontend --region=us-central1

# Verify public access settings
gcloud run services get-iam-policy dreamango-backend --region=us-central1
gcloud run services get-iam-policy dreamango-frontend --region=us-central1
```

## Troubleshooting

### Common Issues

1. **Authentication Errors:**
   ```bash
   gcloud auth application-default login
   ```

2. **Permission Denied:**
   ```bash
   # Check current permissions
   gcloud auth list
   gcloud config list
   ```

3. **Container Registry Access:**
   ```bash
   gcloud auth configure-docker
   ```

### Health Check URLs
- Backend Health: `https://dreamango-backend-[hash].run.app/health/`
- Frontend: `https://dreamango-frontend-[hash].run.app/`

## Security Monitoring

- Enable Cloud Security Command Center for advanced threat detection
- Set up alerting for unauthorized access attempts
- Regular security audits of IAM permissions
- Monitor Cloud Run logs for suspicious activity

## Next Steps

1. Set up proper database (Cloud SQL PostgreSQL)
2. Configure custom domain with SSL certificates
3. Implement API rate limiting
4. Set up monitoring and alerting (Cloud Monitoring)
5. Configure backup strategies