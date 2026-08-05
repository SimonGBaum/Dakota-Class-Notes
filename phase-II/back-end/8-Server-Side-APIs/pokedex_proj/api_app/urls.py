from django.urls import path
from .views import NounProject

urlpatterns = [
    path('', NounProject.as_view(), name="noun_project")
]
# pip install requests requests_oauthlib