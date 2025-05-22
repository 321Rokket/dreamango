# 13_Environment_Configuration.md

## Responsible CHOIRBOIS Conductor(s)

*To be assigned*


## Overview
This document lists the environment variables and configuration settings required for different environments (local, development, staging, production).

**IMPORTANT:** Actual secret values should NEVER be stored in this file or committed to version control. Use a secure secret management solution.

## Local Development (`.env` file)

| Variable Name        | Description                         | Example Value (for illustration only) |
|----------------------|-------------------------------------|---------------------------------------|
| `DEBUG`              | Django debug mode                   | `True`                                |
| `SECRET_KEY`         | Django secret key                   | `your-super-secret-key-local`         |
| `DATABASE_URL`       | PostgreSQL connection string        | `postgres://user:pass@localhost:5432/dreamango_dev` |
| `DJANGO_SETTINGS_MODULE` | Django settings module            | `dreamango.settings.local`            |
| `REACT_APP_API_URL`  | Backend API URL for frontend        | `http://localhost:8000/api`           |
| `POSTGRES_USER`      | Docker PostgreSQL User              | `dreamango`                           |
| `POSTGRES_PASSWORD`  | Docker PostgreSQL Password          | `dreamango`                           |
| `POSTGRES_DB`        | Docker PostgreSQL Database Name     | `dreamango_dev`                       |

## Cloud Environments (Dev/Staging/Prod)
(Managed via Cloud Run environment variables, Secret Manager, etc.)

| Variable Name        | Description                         | Where Managed                       |
|----------------------|-------------------------------------|-------------------------------------|
| `DEBUG`              | Django debug mode                   | Cloud Run Env Var / Secret Manager  |
| `SECRET_KEY`         | Django secret key                   | Secret Manager                      |
| `DATABASE_URL`       | Google Cloud SQL connection string  | Secret Manager                      |
| `DJANGO_SETTINGS_MODULE` | Django settings module            | Cloud Run Env Var                   |
| `GS_BUCKET_NAME`     | Google Cloud Storage bucket name    | Cloud Run Env Var / Secret Manager  |
| `GOOGLE_CLOUD_PROJECT`| GCP Project ID                     | Cloud Run Env Var (often auto-set)  |
| `ALLOWED_HOSTS`      | Django allowed hosts                | Cloud Run Env Var / Secret Manager  |
