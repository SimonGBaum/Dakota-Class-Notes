from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse
from unittest.mock import patch
import json

# Create your tests here.
class NounProjectTest(TestCase):
    
    def setUp(self):
        self.client = APIClient()
    
    
    
    @patch('requests.get')
    def test_01_type_icon_api_view(self, mock_get):
        types= 'fire'
        preview_url = "https://example.com/image.png"
        mock_response = type("MockResponse",(),
                {
                 "json": lambda self: {'icons':[{'thumbnail_url':preview_url}]}
                }
             )
        mock_get.return_value = mock_response()
        response = self.client.get(reverse('noun_project', args=[types]))
        with self.subTest():
            self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), preview_url)
        
        
