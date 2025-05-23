# DreamCatchr Deployment Checklist

## ✅ DEPLOYMENT COMPLETED - May 23, 2025

**Production URLs:**
- **Frontend (Public):** https://dreamango-frontend-108538800485.us-central1.run.app
- **Backend (Private):** https://dreamango-backend-108538800485.us-central1.run.app

## Pre-Deployment Checks

### Backend
- [ ] All migrations are applied
- [ ] Static files are collected
- [ ] Environment variables are configured
- [ ] Health check endpoint is working
- [ ] CORS settings are properly configured
- [ ] Database connection is tested
- [ ] Gunicorn configuration is optimized
- [ ] Logging is properly configured

### Frontend
- [ ] Build process completes successfully
- [ ] Environment variables are set
- [ ] API endpoints are correctly configured
- [ ] Nginx configuration is tested
- [ ] Static assets are properly served
- [ ] Security headers are in place
- [ ] Caching is configured correctly

### Infrastructure
- [ ] GCP project is set up
- [ ] Service accounts are configured
- [ ] IAM permissions are set
- [ ] Secret Manager secrets are created
- [ ] Cloud Run service is configured
- [ ] Database instance is provisioned
- [ ] Network security rules are set
- [ ] SSL certificates are configured

## Deployment Steps

1. **Backend Deployment**
   ```bash
   # Build and push backend image
   docker build -t gcr.io/${GCP_PROJECT_ID}/dreamango-backend:latest ./backend
   docker push gcr.io/${GCP_PROJECT_ID}/dreamango-backend:latest

   # Deploy to Cloud Run
   gcloud run deploy dreamango-backend \
     --image gcr.io/${GCP_PROJECT_ID}/dreamango-backend:latest \
     --platform managed \
     --region ${GCP_REGION} \
     --allow-unauthenticated \
     --set-env-vars="DREAMANGO_ENV=production" \
     --set-secrets="DREAMANGO_SECRET_KEY=django-secret-key-prod,DATABASE_URL=database-url-prod,ALLOWED_HOSTS=allowed-hosts-prod"
   ```

2. **Frontend Deployment**
   ```bash
   # Build and push frontend image
   docker build -t gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:latest ./frontend
   docker push gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:latest

   # Deploy to Cloud Run
   gcloud run deploy dreamango-frontend \
     --image gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:latest \
     --platform managed \
     --region ${GCP_REGION} \
     --allow-unauthenticated \
     --set-env-vars="BACKEND_URL=https://dreamango-backend-xxxxx.run.app"
   ```

## Post-Deployment Verification

### Backend
- [ ] Health check endpoint returns 200
- [ ] API endpoints are accessible
- [ ] Database connections are working
- [ ] Static files are served correctly
- [ ] Logs show no errors
- [ ] Performance metrics are within limits

### Frontend
- [ ] Application loads successfully
- [ ] API calls are working
- [ ] Static assets are loading
- [ ] No console errors
- [ ] Performance metrics are good
- [ ] Mobile responsiveness is verified

### Infrastructure
- [ ] Cloud Run services are running
- [ ] Database is accessible
- [ ] Secrets are properly configured
- [ ] Monitoring is set up
- [ ] Alerts are configured
- [ ] Backup strategy is in place

## Rollback Plan

1. **Backend Rollback**
   ```bash
   gcloud run services update-traffic dreamango-backend \
     --to-revision=previous-revision
   ```

2. **Frontend Rollback**
   ```bash
   gcloud run services update-traffic dreamango-frontend \
     --to-revision=previous-revision
   ```

## Monitoring Setup

- [ ] Set up Cloud Monitoring
- [ ] Configure alerting policies
- [ ] Set up logging
- [ ] Configure error reporting
- [ ] Set up performance monitoring
- [ ] Configure uptime checks

## Security Checklist

- [ ] SSL/TLS is configured
- [ ] Security headers are set
- [ ] CORS is properly configured
- [ ] Secrets are managed securely
- [ ] Access controls are in place
- [ ] Regular security scans are scheduled 