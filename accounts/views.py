from django.shortcuts import render

from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView

from .serializers import (
    UserSerializer,
    LoginSerializer,
    StudentProfileSerializer
)


class RegisterView(generics.CreateAPIView):
    """
    Register a new user.
    """

    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class LoginView(APIView):
    """
    Login using email or phone number.
    Returns access and refresh JWT tokens.
    """

    permission_classes = [permissions.AllowAny]

    def post(self, request):

        serializer = LoginSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        return Response(
            serializer.validated_data
        )


class CurrentUserView(APIView):
    """
    Return the currently authenticated user.
    """

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):

        serializer = UserSerializer(
            request.user
        )

        return Response(
            serializer.data
        )


class RefreshTokenView(TokenRefreshView):
    """
    Generate a new access token
    using a valid refresh token.
    """

    permission_classes = [permissions.AllowAny]




class StudentProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get_student(self, request):
        if request.user.role != UserRole.STUDENT:
            return None

        try:
            return request.user.student
        except Student.DoesNotExist:
            return None

    def get(self, request):
        student = self.get_student(request)

        if student is None:
            return Response(
                {"detail": "Student profile not found."},
                status=404,
            )

        serializer = StudentProfileSerializer(student)
        return Response(serializer.data)

    def patch(self, request):
        student = self.get_student(request)

        if student is None:
            return Response(
                {"detail": "Student profile not found."},
                status=404,
            )

        serializer = StudentProfileSerializer(
            student,
            data=request.data,
            partial=True,
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
