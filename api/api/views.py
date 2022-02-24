from rest_framework import views, permissions, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from api.models import User
from api.serializers import UserSerializer, RegisterSerializer


class UserView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    
    def get(self, request):
        current_user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(current_user)
        return Response(data={'user': serializer.data}, status=status.HTTP_200_OK)
    

class UsersView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(data={'users': serializer.data}, status=status.HTTP_200_OK)
    
    
class RegisterView(views.APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(data={'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(**serializer.validated_data)
        user.is_active = True
        user.save()
        return Response(data={'user': serializer.data}, status=status.HTTP_201_CREATED)
    
    
class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        email = request.data.get('email', '')
        password = request.data.get('password', '')
        if email is None or password is None:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.filter(email=email)
        print("User", user)
        if not user.exists() or not user.get().check_password(password):
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)
        token, _ = Token.objects.get_or_create(user=user.get())
        return Response({'token': token.key}, status=status.HTTP_200_OK)