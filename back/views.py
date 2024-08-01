from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializer import clientSerializer
from .models import Client

# Create your views here.

class clientList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = clientSerializer
    pass

"""ListCreateAPIView -> Used for read-write endpoints to represent a collection of model instances.
Provides get and post method handlers"""

class clientDetail(generics.RetrieveDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = clientSerializer    
    pass  

"""RetrieveDestroyAPIView -> Used for read or delete endpoints to represent a single model instance.
Provides get and delete method handlers."""   