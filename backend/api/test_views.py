from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


class TestViews(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_health_check(self):
        response = self.client.get(reverse('health_check'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'status': 'healthy'})

    def test_api_status(self):
        response = self.client.get(reverse('api_status'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'status': 'operational'})

    def test_invalid_endpoint(self):
        response = self.client.get('/api/invalid/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_method_not_allowed(self):
        response = self.client.post(reverse('health_check'))
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_cors_headers(self):
        response = self.client.get(reverse('health_check'), HTTP_ORIGIN='http://localhost:3000')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('Access-Control-Allow-Origin', response)