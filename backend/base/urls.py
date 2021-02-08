# base/urls.py
from django.urls import path 
from base import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
]