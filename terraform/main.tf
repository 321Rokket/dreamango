# Terraform Configuration for Dreamcatchr

terraform {
  required_providers {
    # Google Cloud provider - uncomment when ready to use
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
  # Uncomment to use GCS as a backend
  # backend "gcs" {
  #   bucket = "dreamcatchr-terraform-state"
  #   prefix = "terraform/state"
  # }
}

# Provider Configuration for GCP
provider "google" {
  # These come from environment variables in ~/.zshrc
  # GOOGLE_APPLICATION_CREDENTIALS, GCP_PROJECT_ID, GCP_REGION
  project = var.gcp_project_id
  region  = var.gcp_region
}

# --- Variables ---
variable "gcp_project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "gcp_region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "environment" {
  description = "Deployment environment (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}

# Enable required APIs
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
}

resource "google_project_service" "iam_api" {
  service = "iam.googleapis.com"
}

resource "google_project_service" "secretmanager_api" {
  service = "secretmanager.googleapis.com"
}

resource "google_project_service" "cloudbuild_api" {
  service = "cloudbuild.googleapis.com"
}

# --- Outputs ---
output "backend_url" {
  value = google_cloud_run_service.backend.status[0].url
  description = "URL of the backend Cloud Run service"
}

output "frontend_url" {
  value = google_cloud_run_service.frontend.status[0].url
  description = "URL of the frontend Cloud Run service"
}

output "service_account_email" {
  value = google_service_account.cloud_run.email
  description = "Email of the Cloud Run service account"
}

output "setup_instructions" {
  value = <<EOT
GCP Terraform configuration initialized.

To use this configuration:

1. Ensure you have the following environment variables in your ~/.zshrc:
   - GOOGLE_APPLICATION_CREDENTIALS (path to your service account key file)
   - GCP_PROJECT_ID
   - GCP_REGION

2. Run: source ~/.zshrc

3. Initialize Terraform: terraform init

4. Plan your changes: terraform plan

5. Apply your changes: terraform apply

For production, consider using GCP Secret Manager for sensitive data.
EOT
}
