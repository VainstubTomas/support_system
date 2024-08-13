from rest_framework import serializers
from .models import Client, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password':{'write_only': True} #Esto indica que la pass va a ser para funciones especificas y cuando se solicite el uer no se mostrara la contraseña (mayor seguridad)
        }

    #hashing the password
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class clientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'