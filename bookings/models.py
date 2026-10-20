from django.db import models
from django.db.models import Q


class BookingStatus(models.TextChoices):
    PENDING_PAYMENT = "PENDING_PAYMENT", "Pending Payment"
    PAYMENT_PROOF_SUBMITTED = "PAYMENT_PROOF_SUBMITTED", "Payment Proof Submitted"
    CONFIRMED = "CONFIRMED", "Confirmed"
    REJECTED = "REJECTED", "Rejected"
    EXPIRED = "EXPIRED", "Expired"


class Booking(models.Model):
    student = models.ForeignKey(
        "accounts.Student",
        on_delete=models.PROTECT,
        related_name="bookings",
    )
    room = models.ForeignKey("hostels.Room", on_delete=models.PROTECT, related_name="bookings")
    bed = models.ForeignKey("hostels.RoomBed", on_delete=models.PROTECT, related_name="bookings")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=30,
        choices=BookingStatus.choices,
        default=BookingStatus.PENDING_PAYMENT,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["bed"],
                condition=Q(status__in=[
                    BookingStatus.PENDING_PAYMENT,
                    BookingStatus.PAYMENT_PROOF_SUBMITTED,
                    BookingStatus.CONFIRMED,
                ]),
                name="unique_active_booking_bed",
            )
        ]
        ordering = ["-created_at"]

    def __str__(self):
        return f"Booking #{self.id} - {self.student.full_name}"


class PaymentProofStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"
    APPROVED = "APPROVED", "Approved"
    REJECTED = "REJECTED", "Rejected"


class PaymentProof(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name="payment_proofs")
    uploaded_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="uploaded_payment_proofs")
    file_url = models.URLField()
    reviewed_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="reviewed_payment_proofs")
    reviewed_at = models.DateTimeField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=PaymentProofStatus.choices,
        default=PaymentProofStatus.PENDING,
    )
    review_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Proof for booking #{self.booking_id}"


class AllocationStatus(models.TextChoices):
    ACTIVE = "ACTIVE", "Active"
    RELEASED = "RELEASED", "Released"
    CANCELLED = "CANCELLED", "Cancelled"


class Allocation(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name="allocations")
    resident = models.ForeignKey("residents.Resident", on_delete=models.CASCADE, related_name="allocations")
    room = models.ForeignKey("hostels.Room", on_delete=models.PROTECT, related_name="allocations")
    bed = models.ForeignKey("hostels.RoomBed", on_delete=models.PROTECT, related_name="allocations")
    allocated_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="allocations_made")
    allocation_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=AllocationStatus.choices,
        default=AllocationStatus.ACTIVE,
    )
    notes = models.TextField(blank=True, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["bed"],
                condition=Q(status=AllocationStatus.ACTIVE),
                name="unique_active_allocation_bed",
            )
        ]
        ordering = ["-allocation_date"]

    def __str__(self):
        return f"Allocation for {self.resident.student.full_name}"


class BookingStatusHistory(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name="status_history")
    previous_status = models.CharField(max_length=30, blank=True, null=True)
    new_status = models.CharField(max_length=30)
    changed_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="booking_status_changes")
    notes = models.TextField(blank=True, null=True)
    changed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-changed_at"]

    def __str__(self):
        return f"{self.booking_id}: {self.previous_status} -> {self.new_status}"
