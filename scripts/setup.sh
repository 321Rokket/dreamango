#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
PROJECT_ROOT=$(dirname "$SCRIPT_DIR")

# Function to print messages
echo_message() {
  echo "--------------------------------------------------"
  echo "$1"
  echo "--------------------------------------------------"
}

# Function to check if an environment variable is set
check_env_var() {
  local var_name=$1
  local var_value=${!var_name}
  
  if [ -z "$var_value" ]; then
    echo "WARNING: $var_name environment variable is not set in your shell."
    echo "Please add 'export $var_name=your_value' to your ~/.zshrc file."
    return 1
  else
    echo "✅ $var_name is set."
    return 0
  fi
}

echo_message "Checking required environment variables..."

# Check for Django environment variables
check_env_var "DJANGO_SECRET_KEY" || missing_vars=true
check_env_var "DATABASE_URL" || missing_vars=true
check_env_var "ALLOWED_HOSTS" || missing_vars=true

# Check for GCP environment variables
check_env_var "GOOGLE_APPLICATION_CREDENTIALS" || missing_vars=true
check_env_var "GCP_PROJECT_ID" || missing_vars=true
check_env_var "GCP_REGION" || missing_vars=true

if [ "$missing_vars" = true ]; then
  echo_message "Some environment variables are missing in your shell."
  echo "Please add the missing variables to your ~/.zshrc file and run 'source ~/.zshrc'"
  echo "Here's an example of what to add to your ~/.zshrc:"
  echo ""
  echo "# Django environment variables"
  echo "export DJANGO_SECRET_KEY='generate_a_secure_key_here'"
  echo "export DATABASE_URL='postgres://dreamusr:dreampass@db:5432/dreamcatchr'"
  echo "export ALLOWED_HOSTS='localhost,127.0.0.1,backend'"
  echo "export DEBUG='True'"
  echo ""
  echo "# GCP credentials"
  echo "export GOOGLE_APPLICATION_CREDENTIALS='/path/to/your/service-account-key.json'"
  echo "export GCP_PROJECT_ID='your-gcp-project-id'"
  echo "export GCP_REGION='us-central1'"
  
  echo ""
  echo "Would you like to continue anyway? (y/n)"
  read -r continue_setup
  if [ "$continue_setup" != "y" ]; then
    echo "Setup aborted. Please set the required environment variables and try again."
    exit 1
  fi
fi

# Initial npm install for frontend (if not handled by Docker during dev)
echo_message "Ensuring frontend dependencies are installed..."
if [ -d "$PROJECT_ROOT/frontend" ] && [ -f "$PROJECT_ROOT/frontend/package.json" ]; then
  (cd "$PROJECT_ROOT/frontend" && npm install)
else
  echo "Frontend directory or package.json not found. Skipping npm install for frontend."
fi

# Build and start Docker containers
echo_message "Building and starting Docker containers..."
docker-compose -f "$PROJECT_ROOT/docker-compose.yml" up --build -d

echo_message "Setup complete!"
echo "Backend should be running on http://localhost:8000"
echo "Frontend should be running on http://localhost:3000"

echo ""
echo "Next Steps:"
echo "1. Initialize your Django project in the 'backend' directory if you haven't already:"
echo "   (Inside backend dir): django-admin startproject your_project_name ."
echo "   (Then update backend/Dockerfile CMD and backend/your_project_name/wsgi.py if needed)"
echo "2. Run Django migrations: docker-compose exec backend python manage.py migrate"
echo "3. Create a Django superuser: docker-compose exec backend python manage.py createsuperuser"
