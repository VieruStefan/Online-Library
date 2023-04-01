from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from api.models import Car, Book
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

@api_view(['GET', 'POST'])
def cars_collection(request):
    if request.method == 'GET':
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        car = Car.objects.create(
            name=data['name'],
            manufacturer=data['manufacturer'],
            car_class=data['car_class'],
            available=data['available']
        )
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)
    else:
        return Response('Method not allowed', status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET', 'PUT', 'DELETE'])
def crudCars(request, pk):
    if request.method == 'GET':
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = request.data
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(instance=car, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    elif request.method == 'DELETE':
        car = Car.objects.get(id=pk)
        car.delete()
        return Response('Car was deteled!')

    else:
        return Response('Method not allowed!')

@api_view(['GET', 'POST'])
def books_collection(request):
    if request.method == 'GET':
        book = Book.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        car = Car.objects.create(
            name=data['name'],
            manufacturer=data['manufacturer'],
            car_class=data['car_class'],
            available=data['available']
        )
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)
    else:
        return Response('Method not allowed', status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET', 'PUT', 'DELETE'])
def crudCars(request, pk):
    if request.method == 'GET':
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(car, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = request.data
        car = Car.objects.get(id=pk)
        serializer = CarSerializer(instance=car, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    elif request.method == 'DELETE':
        car = Car.objects.get(id=pk)
        car.delete()
        return Response('Car was deteled!')

    else:
        return Response('Method not allowed!')
