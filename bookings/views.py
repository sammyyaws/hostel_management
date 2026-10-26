
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Student, StudentGender
from hostels.models import (
    Room,
    RoomBed,
    RoomBedStatus,
    RoomGender,
    RoomStatus,
)

from .serializers import BookingEligibilitySerializer

User = get_user_model()


class BookingEligibilityView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = BookingEligibilitySerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "eligible": False,
                    "message": "Please check the submitted details.",
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        email = serializer.validated_data["email"].strip().lower()
        selected_gender = serializer.validated_data["gender"]
        room_id = serializer.validated_data["room_id"]
        bed_id = serializer.validated_data["bed_id"]

        user = User.objects.filter(email__iexact=email).first()
        exists = user is not None

        # For an existing account, use the gender saved on its student profile.
        if user:
            student = Student.objects.filter(user=user).first()

            if not student:
                return Response({
                    "exists": True,
                    "eligible": False,
                    "message": (
                        "This email belongs to an account without a student "
                        "profile. Please sign in for assistance."
                    ),
                })

            selected_gender = student.gender

        room = Room.objects.filter(
            pk=room_id,
            published=True,
        ).first()

        if not room:
            return Response({
                "exists": exists,
                "eligible": False,
                "message": "This room is not available for booking.",
            })

        if room.status == RoomStatus.MAINTENANCE:
            return Response({
                "exists": exists,
                "eligible": False,
                "message": "This room is currently under maintenance.",
            })

        bed = RoomBed.objects.filter(
            pk=bed_id,
            room=room,
        ).first()

        if not bed or bed.status != RoomBedStatus.AVAILABLE:
            return Response({
                "exists": exists,
                "eligible": False,
                "message": "This bed is no longer available. Please select another bed.",
            })

        if (
            room.gender != RoomGender.UNASSIGNED
            and room.gender != selected_gender
        ):
            return Response({
                "exists": exists,
                "eligible": False,
                "message": (
                    "This room is assigned to students of the opposite gender. "
                    "Please select another room."
                ),
            })

        return Response({
            "exists": exists,
            "eligible": True,
            "message": "You can continue with this room selection.",
        })
