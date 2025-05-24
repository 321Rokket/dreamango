from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


class ConfigViewsTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_config_endpoint(self):
        response = self.client.get(reverse('config'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('version', response.data)
        self.assertIn('environment', response.data)

    def test_config_methods(self):
        # Test POST is not allowed
        response = self.client.post(reverse('config'))
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

        # Test PUT is not allowed
        response = self.client.put(reverse('config'))
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

        # Test DELETE is not allowed
        response = self.client.delete(reverse('config'))
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_config_response_format(self):
        response = self.client.get(reverse('config'))
        self.assertEqual(response['Content-Type'], 'application/json')
        self.assertIsInstance(response.data['version'], str)
        self.assertIsInstance(response.data['environment'], str)

    def test_config_no_authentication_required(self):
        unauthenticated_client = APIClient()
        response = unauthenticated_client.get(reverse('config'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)