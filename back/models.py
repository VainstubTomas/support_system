from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    REQUIRED_FIELDS=[]

class Client(models.Model):
    id = models.AutoField(primary_key=True)
    complete_name = models.CharField(max_length=100, default="")
    dni = models.CharField(max_length=8, default="")
    phone_number = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=100, default="")
    problem = models.CharField(max_length=1000, default="")

    def __str__(self):
        return str(f'{self.id} - {self.complete_name}')