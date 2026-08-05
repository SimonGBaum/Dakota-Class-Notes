from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from requests_oauthlib import OAuth1
import requests
import os
import pprint
# Create your views here.

pp = pprint.PrettyPrinter(indent=2, depth=3)

class NounProject(APIView):
    authentication_classes=[]
    permission_classes=[]
    
    def get(self, request, types):
        auth = OAuth1(os.environ.get("NP_API_KEY"), os.environ.get("NP_SECRET_KEY"))
        endpoint = f"https://api.thenounproject.com/v2/icon?query={types}&limit=1&thumbnail_size=200"
        
        response = requests.get(endpoint, auth=auth)
        # print(response.content)
        responseJSON=response.json()
        pp.pprint(responseJSON)
        return Response(responseJSON['icons'][0]['thumbnail_url'])