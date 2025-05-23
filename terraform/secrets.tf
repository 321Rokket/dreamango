# Secret Manager configuration for DreamCatchr

# Create a secret for Django secret key
resource "google_secret_manager_secret" "django_secret_key" {
  secret_id = "django-secret-key-${var.environment}"
  
  replication {
    auto {}
  }
}

# Create a secret for database URL
resource "google_secret_manager_secret" "database_url" {
  secret_id = "database-url-${var.environment}"
  
  replication {
    auto {}
  }
}

# Create a secret for allowed hosts
resource "google_secret_manager_secret" "allowed_hosts" {
  secret_id = "allowed-hosts-${var.environment}"
  
  replication {
    auto {}
  }
}

# Grant access to Cloud Run service account
resource "google_secret_manager_secret_iam_member" "secret_access" {
  for_each = {
    django_secret_key = google_secret_manager_secret.django_secret_key.id
    database_url      = google_secret_manager_secret.database_url.id
    allowed_hosts     = google_secret_manager_secret.allowed_hosts.id
  }

  secret_id = each.value
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.cloud_run.email}"
} 