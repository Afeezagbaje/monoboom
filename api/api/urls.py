from django.urls import path

from api.views import UserView, UsersView, RegisterView, LoginView


urlpatterns = [
    path('user/', UserView.as_view(), name='user'),
    path('users/', UsersView.as_view(), name='users'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]
