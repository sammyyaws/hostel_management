from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.exceptions import AuthenticationFailed
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "password",
            "role",
            "status",
            "created_at",
            "updated_at",
            "last_login",
            "is_staff",
            "is_superuser",
            "is_active",
        ]
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
            "last_login",
            "is_staff",
            "is_superuser",
            "is_active",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create_user(password=password, **validated_data)
        return user


class LoginSerializer(TokenObtainPairSerializer):
    login = serializers.CharField(write_only=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields.pop("email", None)

    def validate(self, attrs):
        login = attrs.pop("login")

        try:
            user = User.objects.get(email=login)
        except User.DoesNotExist as exc:
            raise AuthenticationFailed("Invalid email or password.") from exc

        if not user.is_active:
            raise AuthenticationFailed("Your account is inactive.")

        attrs["email"] = user.email
        data = super().validate(attrs)

        data["user"] = {
            "id": self.user.id,
            "email": self.user.email,
            "role": self.user.role,
            "status": self.user.status,
        }

        return data