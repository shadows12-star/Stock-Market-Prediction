from django.contrib import admin
from django.urls import include, path


from django.contrib import admin
from django.urls import include, path
from accounts.views import UserCreateView


urlpatterns = [
   path('register/', UserCreateView.as_view(), name='user-create'),
    

]
