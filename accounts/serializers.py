
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.db import transaction

from rest_framework import serializers
from rest_framework_simplejwt.exceptions import AuthenticationFailed
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import (
    Student,
    UserRole,
    UserStatus,
    StudentGender,
)

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        trim_whitespace=False,
        validators=[validate_password],
    )

    full_name = serializers.CharField(
        write_only=True,
        max_length=150,
    )

    student_id = serializers.CharField(
        write_only=True,
        max_length=50,
    )

    phone = serializers.CharField(
        write_only=True,
        max_length=30,
        required=False,
        allow_blank=True,
    )

    # ADDED: Gender belongs to the Student model, not User.
    gender = serializers.ChoiceField(
        choices=StudentGender.choices,
        write_only=True,
        required=True,
    )

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "password",
            "full_name",
            "student_id",
            "gender",
            "phone",
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
            "role",
            "status",
            "created_at",
            "updated_at",
            "last_login",
            "is_staff",
            "is_superuser",
            "is_active",
        ]

    def validate_student_id(self, value):
        if Student.objects.filter(student_id=value).exists():
            raise serializers.ValidationError(
                "This student ID is already registered."
            )
        return value

    @transaction.atomic
    def create(self, validated_data):
        password = validated_data.pop("password")
        full_name = validated_data.pop("full_name")
        student_id = validated_data.pop("student_id")
        phone = validated_data.pop("phone", "")

        # ADDED: Extract the submitted gender.
        gender = validated_data.pop("gender")

        user = User.objects.create_user(
            password=password,
            role=UserRole.STUDENT,
            status=UserStatus.ACTIVE,
            **validated_data,
        )

        Student.objects.create(
            user=user,
            full_name=full_name,
            student_id=student_id,
            phone=phone,
            gender=gender,  # ADDED: Save gender to the Student record.
        )

        return user


class LoginSerializer(TokenObtainPairSerializer):
    login = serializers.CharField(
        write_only=True,
        trim_whitespace=True,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields.pop("email", None)

    def validate(self, attrs):
        login = attrs.pop("login").strip()

        try:
            user = User.objects.get(email__iexact=login)
        except User.DoesNotExist as exc:
            raise AuthenticationFailed(
                "Invalid email or password."
            ) from exc

        if not user.is_active or user.status != UserStatus.ACTIVE:
            raise AuthenticationFailed(
                "Your account is inactive or suspended."
            )

        attrs["email"] = user.email
        data = super().validate(attrs)

        data["user"] = {
            "id": self.user.id,
            "email": self.user.email,
            "role": self.user.role,
            "status": self.user.status,
        }

        return data


# Profile update serializer

class StudentProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        source="user.email",
        read_only=True,
    )

    is_profile_complete = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = [
            "full_name",
            "student_id",
            "email",
            "phone",
            "gender",
            "program",
            "year_of_study",
            "emergency_contact",
            "is_profile_complete",
        ]
        read_only_fields = ["email", "is_profile_complete"]

    def get_is_profile_complete(self, obj):
        required_fields = [
            obj.full_name,
            obj.student_id,
            obj.phone,
            obj.gender,
            obj.program,
            obj.year_of_study,
        ]

        return all(
            value is not None and str(value).strip() != ""
            for value in required_fields
        )
