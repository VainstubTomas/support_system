from django.shortcuts import render
from rest_framework import generics
from .serializer import clientSerializer, UserSerializer
from .models import Client, User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime

# Create your views here.
#USERS
class RegisterView(APIView): #APIView es una vista que se basa sobre una clase, en este caso USER que permite solicitar y devolver respuestas HTTP
    def post(self, request): #Se define el metodo CRUD
        serializer = UserSerializer(data=request.data)#Se crea una instancia del serializador, enviandole datos atraves de la solcitud post request data
        serializer.is_valid(raise_exception=True)#verifica que los datos que se envian son validos, sino lanza una excepcion
        serializer.save()#si los datos son validos los guarda en la BD
        return Response(serializer.data)#retorna una respuesta HTTP con los datos enviados
    

class LoginView(APIView):
    def post(self, request):
        #Los dos request extraen el dato especifico del cuerpo de la solicitud POST
        username = request.data['username']
        password = request.data['password']

        #busca un user en la BD 
        user = User.objects.filter(username=username).first()

        #verifica si el usuario no fue encontrado, si no lo encuentra arroja una excepcion
        if user is None:
            raise AuthenticationFailed('User not found!')
        
        #verifica si la password del usuario es igual o no a la almacenada, dependiendo de eso arroja o no una excepcion
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        
        #Payload cumple el rol de diccionario, el cual almacena los datos del usuario (id), determina el tiempo de expiracion y el tiempo de emision del token
        payload = {
            'id': user.id,
            'exp':datetime.datetime.now()+datetime.timedelta(minutes=60),
            'iat': datetime.datetime.now()
        }

        #token codifica el payload y lo transorma a JWT mediante HS256 
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        #'secret' variable de entorno para mayor seguridad

        #crea una respuesta http vacia
        response = Response()

        #httponly permite que no se observe el token en el front, solo que nos permita trabajar con el back
        response.set_cookie(key='jwt',value=token, httponly=True)
        #asignamos los datos de la respuesta
        response.data={
            'jwt':token
        }

        #lo que antes era una respuesta http vacia, ahora lleva el token de validacion
        return response
    
class UserView(APIView):
    def get(self, request):
        #intenta obtener el token desde las cookies
        token = request.COOKIES.get('jwt')

        #verifica si no hay un token
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        
        #Intenta decodificar el token, si expiro arroja una excepcion
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
            #se aclara lo q se va a decode(token) usando la clave y el algoritmo
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        
        #busca el usuario que coincida con el id dentro del payload
        user = User.objects.filter(id=payload['id']).first()

        #serializa los datos del usuario
        serializer = UserSerializer(user)

        return Response(serializer.data)
    
class LogoutView(APIView):
    def post(self, request):
        #genera una respuesta http
        response = Response()
        #como es un log out se borran los datos almacenados
        response.delete_cookie('jwt')
        response.data={
            'message':'success'
        }

        return response

#CLIENTES
class ClientList(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = clientSerializer
    pass

"""ListCreateAPIView -> Used for read-write endpoints to represent a collection of model instances.
Provides get and post method handlers"""

class ClientDetail(generics.RetrieveDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = clientSerializer    
    pass  

"""RetrieveDestroyAPIView -> Used for read or delete endpoints to represent a single model instance.
Provides get and delete method handlers."""
