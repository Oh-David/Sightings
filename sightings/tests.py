from django.test import TestCase
from django.urls import reverse

class SightingsTestCase(TestCase):
    def test_homepage_exists(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    # def test_login_page_exists(self):
    #     response = self.client.get(reverse('login'))
    #     self.assertEqual(response.status_code, 200)
