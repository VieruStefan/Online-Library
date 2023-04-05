from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('books/', views.books_collection, name="books"),
    path('books/<str:pk>/', views.books_crud, name="books-crud")
]
