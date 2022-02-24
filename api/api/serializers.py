from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'created_at', 'updated_at')
        
        
class RegisterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255, min_length=5, required=True)
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])    
    password = serializers.CharField(min_length=6, max_length=50, write_only=True, style={'input_type': 'password'}, trim_whitespace=True)
    
    class Meta:
        model = User
        fields = ( 'name', 'email', 'password')
        
    def validate_email(self, email):
        if email == "":
            raise serializers.ValidationError("Email is required")
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({"email": "Email already exists"})
        return email
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, style={'input_type': 'password'})
    
    def validate(self, email, password):
        # email = attrs.get('email', "")
        # password = attrs.get('password', "")
        if email == "":
            raise serializers.ValidationError("Email is required")
        if password == "":
            raise serializers.ValidationError("Password is required")
        if not User.objects.filter(email=email).exists():
            raise serializers.ValidationError({"email": "Email does not exist"})
        user = User.objects.get(email=email)
        if not user.check_password(password):
            raise serializers.ValidationError({"password": "Password is incorrect"})
        return email