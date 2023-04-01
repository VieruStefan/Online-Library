from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cars/', views.cars_collection, name="cars"),
    path('cars/<str:pk>/', views.crudCars, name="crud-car")
]
