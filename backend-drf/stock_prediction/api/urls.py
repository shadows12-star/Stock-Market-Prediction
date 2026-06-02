from django.contrib import admin
from django.urls import include, path


from django.contrib import admin
from django.urls import include, path
from accounts.views import UserCreateView
from accounts.views import ProtectedView
from .views import StockPredictionApiview

urlpatterns = [
   path('register/', UserCreateView.as_view(), name='user-create'),
   path('protected-view/', ProtectedView.as_view(), name='protected-view'),
   path('predict/', StockPredictionApiview.as_view(), name='stock-prediction'),
]
