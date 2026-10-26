
from rest_framework import serializers

from accounts.models import StudentGender


class BookingEligibilitySerializer(serializers.Serializer):
    email = serializers.EmailField()
    gender = serializers.ChoiceField(choices=StudentGender.choices)
    room_id = serializers.IntegerField(min_value=1)
    bed_id = serializers.IntegerField(min_value=1)
