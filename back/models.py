from django.db import models

# Create your models here.

class User(models.Model):
    user_identifier = models.CharField(max_length=100, default="")
    password = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.user_identifier

class Client(models.Model):
    id = models.AutoField(primary_key=True)
    complete_name = models.CharField(max_length=100, default="")
    dni = models.CharField(max_length=8, default="")
    phone_number = models.CharField(max_length=50, default="")
    email = models.CharField(max_length=100, default="")
    problem = models.CharField(max_length=1000, default="")

    def __str__(self):
        return str(f'{self.id} - {self.complete_name}')