from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.models import Car
from .serializers import CarSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/cars',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of cars'
        },
        {
            'Endpoint': '/cars/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single car'
        },
        {
            'Endpoint': '/cars',
            'method': 'POST',
            'body': {'body':  ""},
            'description': 'Creates a single car'
        },
        {
            'Endpoint': '/cars/id',
            'method': 'PUT',
            'body': {'body':  ""},
            'description': 'Updates a single car'
        },
        {
            'Endpoint': '/cars/id',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes a single car'
        }
    ]
    
    return Response(routes)

@api_view(['GET'])
def getCars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCar(request, pk):
    car = Car.objects.get(id=pk)
    serializer = CarSerializer(car, many=False)
    return Response(serializer.data)