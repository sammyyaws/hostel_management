
from django.urls import path

from .views import BookingEligibilityView

urlpatterns = [
    path(
        "check-eligibility/",
        BookingEligibilityView.as_view(),
        name="booking-check-eligibility",
    ),
]
