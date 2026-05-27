from django.shortcuts import render

# Create your views here.
from django.contrib import admin
from django.urls import include, path
from accounts.views import UserCreateView   

urlpatterns = [
   path('register/', include('accounts.urls')),

]
