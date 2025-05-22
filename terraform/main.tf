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

# --- Resources (Placeholder - Define your infrastructure here) ---

# Example: VPC Network
# resource "google_compute_network" "vpc_network" {
#   name                    = "dreamcatchr-network-${var.environment}"
#   auto_create_subnetworks = false
# }

# Example: Subnet
# resource "google_compute_subnetwork" "subnet" {
#   name          = "dreamcatchr-subnet-${var.environment}"
#   ip_cidr_range = "10.0.0.0/24"
#   region        = var.gcp_region
#   network       = google_compute_network.vpc_network.id
# }

# Example: Cloud Storage Bucket for static assets
# resource "google_storage_bucket" "frontend_assets" {
#   name     = "dreamcatchr-frontend-assets-${var.environment}"
#   location = "US"
#   storage_class = "STANDARD"
#   uniform_bucket_level_access = true
#   website {
#     main_page_suffix = "index.html"
#     not_found_page   = "404.html"
#   }
#   cors {
#     origin          = ["*"]
#     method          = ["GET", "HEAD", "OPTIONS"]
#     response_header = ["*"]
#     max_age_seconds = 3600
#   }
# }

# Example: Cloud SQL PostgreSQL Instance
# resource "google_sql_database_instance" "postgres" {
#   name             = "dreamcatchr-db-${var.environment}"
#   database_version = "POSTGRES_14"
#   region           = var.gcp_region
#   settings {
#     tier = "db-f1-micro"
#     backup_configuration {
#       enabled = true
#     }
#   }
#   deletion_protection = true
# }

# Example: Cloud Run Service for Backend
# resource "google_cloud_run_service" "backend" {
#   name     = "dreamcatchr-backend-${var.environment}"
#   location = var.gcp_region
#   template {
#     spec {
#       containers {
#         image = "gcr.io/${var.gcp_project_id}/dreamcatchr-backend:latest"
#       }
#     }
#   }
#   traffic {
#     percent         = 100
#     latest_revision = true
#   }
# }

# --- Outputs ---
# output "cloud_storage_bucket_url" {
#   value = google_storage_bucket.frontend_assets.url
#   description = "URL of the frontend assets bucket"
# }

# output "cloud_run_backend_url" {
#   value = google_cloud_run_service.backend.status[0].url
#   description = "URL of the backend Cloud Run service"
# }

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
