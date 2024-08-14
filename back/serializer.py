from rest_framework import serializers
from .models import Client, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User #se define sobre que model se trabajara
        fields = '__all__'#y sobre cuales campos del modelo
        extra_kwargs = {
            'password':{'write_only': True} #Esto indica que la passw solo recibira datos de escritura
        }

    #hashing the password
    def create(self, validated_data): #metodo create encargado de crear una nueva instancia en este caso dentro de User
        password = validated_data.pop('password', None) #Extrae el campo password de los datos validados 
        instance = self.Meta.model(**validated_data)
        if password is not None: #si se paso una constraseña valida, se guarda y se hashea
            instance.set_password(password)
        instance.save()
        return instance
    
#En el momento que se realiza el .pop de las password tambien se quita del diccionario para que no quede ninguna referncia de la misma libre o facil de malear.

#Cuando se genera una nueva instancia con la info validada, se guardan todos los datos menos la password, ya que se hizo el .pop

class clientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'