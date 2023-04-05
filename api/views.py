from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from api.models import Book
from .serializers import BookSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/books',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of books'
        },
        {
            'Endpoint': '/books/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single book'
        },
        {
            'Endpoint': '/books',
            'method': 'POST',
            'body': {'body':  ""},
            'description': 'Creates a single book'
        },
        {
            'Endpoint': '/books/id',
            'method': 'PUT',
            'body': {'body':  ""},
            'description': 'Updates a single book'
        },
        {
            'Endpoint': '/books/id',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes a single book'
        }
    ]
    
    return Response(routes)

@api_view(['GET', 'POST'])
def books_collection(request):
    if request.method == 'GET':
        book = Book.objects.all()
        serializer = BookSerializer(book, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        book = Book.objects.create(
            title=data['title'],
            author=data['author'],
            content=data['content'],
            cover=data['cover'],
            available=data['available']
        )
        serializer = BookSerializer(book, many=False)
        return Response(serializer.data)
    else:
        return Response('Method not allowed', status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET', 'PUT', 'DELETE'])
def books_crud(request, pk):
    if request.method == 'GET':
        book = Book.objects.get(id=pk)
        serializer = BookSerializer(book, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = request.data
        book = Book.objects.get(id=pk)
        serializer = BookSerializer(instance=book, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    elif request.method == 'DELETE':
        book = Book.objects.get(id=pk)
        book.delete()
        return Response('Book was deteled!')

    else:
        return Response('Method not allowed!', status=status.HTTP_405_METHOD_NOT_ALLOWED)
