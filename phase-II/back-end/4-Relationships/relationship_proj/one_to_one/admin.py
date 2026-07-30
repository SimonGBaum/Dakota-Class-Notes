from django.contrib import admin
from .models import Passenger, Passport

# Register your models here.
admin.site.register([Passenger, Passport])