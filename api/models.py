from django.db import models

# Create your models here.

class Car(models.Model):
    name = models.TextField(null=True, blank=True)
    manufacturer = models.TextField(null=True, blank=True)
    car_class = models.TextField(null=True, blank=True)
    available = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.TextField(null=True, blank=True)
    author = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    added_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name + ' by ' + self.author