"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, re_path, include
from .views import frontend_view, api_status

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),  # Include API app URLs
    path("api/status/", api_status, name="api_status"),  # Keep the old status endpoint
    path("health/", api_status, name="health_check"),  # Health check endpoint for load balancers
    re_path(r'^(?:.*)/?$', frontend_view),  # Catch-all for frontend
]
