from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cars/', views.getCars, name="cars"),
    path('cars/<str:pk>/', views.getCar, name="car"),
    path('cars/<str:pk>/update/', views.updateCar, name="update-car")
]
