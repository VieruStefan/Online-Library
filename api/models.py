from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.TextField(null=True, blank=True)
    author = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    cover = models.TextField(null=True, blank=True)
    available = models.BooleanField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    added_on = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name + ' by ' + self.author