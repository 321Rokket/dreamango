#!/bin/bash

# Exit on error
set -e

# Set project ID
export GCP_PROJECT_ID="d-vussci-prd-spzr"
export GCP_REGION="us-central1"

# Get current timestamp for image tagging
export BUILD_TIMESTAMP=$(date +%Y%m%d-%H%M%S)
export GIT_SHA=$(git rev-parse --short HEAD 2>/dev/null || echo "latest")

echo "Starting deployment..."
echo "Project: ${GCP_PROJECT_ID}"
echo "Region: ${GCP_REGION}"
echo "Build timestamp: ${BUILD_TIMESTAMP}"
echo "Git SHA: ${GIT_SHA}"

# NOTE: For CI/CD, authenticate with a dedicated service account with least-privilege permissions.
# gcloud auth activate-service-account --key-file=YOUR_SA_KEY.json

# Configure Docker for GCP
echo "Configuring Docker for GCP..."
gcloud auth configure-docker --quiet

# Ensure buildx builder exists
if ! docker buildx inspect multiarch-builder > /dev/null 2>&1; then
  echo "Creating Docker buildx builder..."
  docker buildx create --name multiarch-builder --use
else
  docker buildx use multiarch-builder
fi

# Build and push backend image (amd64 for Cloud Run compatibility)
echo "Building and pushing backend image..."
docker buildx build --platform linux/amd64 \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-backend:latest \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-backend:${BUILD_TIMESTAMP} \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-backend:${GIT_SHA} \
  ./backend --push

# Build and push frontend image (amd64 for Cloud Run compatibility)
echo "Building and pushing frontend image..."
docker buildx build --platform linux/amd64 \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:latest \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:${BUILD_TIMESTAMP} \
  -t gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:${GIT_SHA} \
  ./frontend --push

# Deploy backend to Cloud Run
echo "Deploying backend to Cloud Run..."
gcloud run deploy dreamango-backend \
  --image gcr.io/${GCP_PROJECT_ID}/dreamango-backend:${BUILD_TIMESTAMP} \
  --platform managed \
  --region ${GCP_REGION} \
  --port=8000 \
  --allow-unauthenticated \
  --set-env-vars="DREAMANGO_ENV=production,ALLOWED_HOSTS=*,DREAMANGO_SECRET_KEY=django-insecure-temp-key-for-testing,DREAMANGO_DEBUG=False" \
  --quiet

# Get the backend URL
echo "Getting backend URL..."
BACKEND_URL=$(gcloud run services describe dreamango-backend --platform managed --region ${GCP_REGION} --format 'value(status.url)')

if [ -z "$BACKEND_URL" ]; then
  echo "ERROR: Failed to get backend URL"
  exit 1
fi

echo "Backend URL: ${BACKEND_URL}"

# Deploy frontend to Cloud Run
echo "Deploying frontend to Cloud Run..."
gcloud run deploy dreamango-frontend \
  --image gcr.io/${GCP_PROJECT_ID}/dreamango-frontend:${BUILD_TIMESTAMP} \
  --platform managed \
  --region ${GCP_REGION} \
  --port=80 \
  --allow-unauthenticated \
  --set-env-vars="BACKEND_URL=${BACKEND_URL},ENVIRONMENT=production" \
  --quiet

# Get frontend URL
FRONTEND_URL=$(gcloud run services describe dreamango-frontend --platform managed --region ${GCP_REGION} --format 'value(status.url)')

# Post-deploy health check for backend (public access)
echo "Checking backend health..."
if curl --fail --max-time 30 --retry 3 "${BACKEND_URL}/api/health/" > /dev/null 2>&1; then
  echo "✅ Backend health check passed!"
else
  echo "❌ Backend health check failed!"
  echo "Attempting to get backend logs..."
  gcloud run services logs read dreamango-backend --region=${GCP_REGION} --limit=10 || echo "Could not fetch logs"
fi

# Post-deploy health check for frontend (public access)
echo "Checking frontend health..."
if curl --fail --max-time 30 --retry 3 "${FRONTEND_URL}/" > /dev/null 2>&1; then
  echo "✅ Frontend health check passed!"
else
  echo "❌ Frontend health check failed!"
  echo "Attempting to get frontend logs..."
  gcloud run services logs read dreamango-frontend --region=${GCP_REGION} --limit=10 || echo "Could not fetch logs"
fi

echo ""
echo "🚀 Deployment completed successfully!"
echo "📝 Deployment Summary:"
echo "   Backend URL:  ${BACKEND_URL}"
echo "   Frontend URL: ${FRONTEND_URL}"
echo "   Build time:   ${BUILD_TIMESTAMP}"
echo "   Git SHA:      ${GIT_SHA}"
echo ""
echo "🔗 Useful links:"
echo "   Frontend: ${FRONTEND_URL}"
echo "   Backend Health: ${BACKEND_URL}/api/health/"
echo "   GCP Console: https://console.cloud.google.com/run?project=${GCP_PROJECT_ID}" 