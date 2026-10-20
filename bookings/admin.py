from django.contrib import admin

from .models import Allocation, Booking, BookingStatusHistory, PaymentProof


admin.site.register(Booking)
admin.site.register(PaymentProof)
admin.site.register(Allocation)
admin.site.register(BookingStatusHistory)