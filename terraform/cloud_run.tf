# Cloud Run service configuration for DreamCatchr

# Service account for Cloud Run
resource "google_service_account" "cloud_run" {
  account_id   = "dreamcatchr-cloud-run-${var.environment}"
  display_name = "DreamCatchr Cloud Run Service Account"
}

# Cloud Run service for backend
resource "google_cloud_run_service" "backend" {
  name     = "dreamcatchr-backend-${var.environment}"
  location = var.gcp_region

  template {
    spec {
      service_account_name = google_service_account.cloud_run.email
      
      containers {
        image = "gcr.io/${var.gcp_project_id}/dreamcatchr-backend:latest"
        
        ports {
          container_port = 8000
        }
        
        env {
          name  = "DREAMANGO_SECRET_KEY"
          value_from {
            secret_key_ref {
              name = google_secret_manager_secret.django_secret_key.secret_id
              key  = "latest"
            }
          }
        }
        
        env {
          name  = "DATABASE_URL"
          value_from {
            secret_key_ref {
              name = google_secret_manager_secret.database_url.secret_id
              key  = "latest"
            }
          }
        }
        
        env {
          name  = "ALLOWED_HOSTS"
          value_from {
            secret_key_ref {
              name = google_secret_manager_secret.allowed_hosts.secret_id
              key  = "latest"
            }
          }
        }
        
        env {
          name  = "DREAMANGO_ENV"
          value = var.environment
        }
        
        env {
          name  = "DREAMANGO_DEBUG"
          value = var.environment == "prod" ? "False" : "True"
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Cloud Run service for frontend
resource "google_cloud_run_service" "frontend" {
  name     = "dreamcatchr-frontend-${var.environment}"
  location = var.gcp_region

  template {
    spec {
      service_account_name = google_service_account.cloud_run.email
      
      containers {
        image = "gcr.io/${var.gcp_project_id}/dreamcatchr-frontend:latest"
        
        ports {
          container_port = 80
        }
        
        env {
          name  = "BACKEND_URL"
          value = google_cloud_run_service.backend.status[0].url
        }
        
        env {
          name  = "ENVIRONMENT"
          value = var.environment
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  
  depends_on = [google_cloud_run_service.backend]
}

# IAM binding to allow public access to backend
resource "google_cloud_run_service_iam_member" "backend_public" {
  location = google_cloud_run_service.backend.location
  project  = google_cloud_run_service.backend.project
  service  = google_cloud_run_service.backend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# IAM binding to allow public access to frontend
resource "google_cloud_run_service_iam_member" "frontend_public" {
  location = google_cloud_run_service.frontend.location
  project  = google_cloud_run_service.frontend.project
  service  = google_cloud_run_service.frontend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
} 