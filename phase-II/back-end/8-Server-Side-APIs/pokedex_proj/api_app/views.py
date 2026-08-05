from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from requests_oauthlib import OAuth1
import requests
import os

# Create your views here.

class NounProject(APIView):
    authentication_classes=[]
    permission_classes=[]
    
    def get(self, request):
        auth = OAuth1(os.environ.get("NP_API_KEY"), os.environ.get("NP_SECRET_KEY"))
        endpoint = "https://api.thenounproject.com/v2/icon/1"
        
        response = requests.get(endpoint, auth=auth)
        print(response.content)
        responseJSON=response.json()
        print(responseJSON)
        return Response(True)