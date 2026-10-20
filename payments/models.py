from django.db import models


class PaymentMethod(models.TextChoices):
    MOBILE_MONEY = "MOBILE_MONEY", "Mobile Money"
    BANK_TRANSFER = "BANK_TRANSFER", "Bank Transfer"
    CASH = "CASH", "Cash"
    OTHER = "OTHER", "Other"


class PaymentStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"
    VERIFIED = "VERIFIED", "Verified"
    REJECTED = "REJECTED", "Rejected"


class Payment(models.Model):
    booking = models.ForeignKey("bookings.Booking", on_delete=models.CASCADE, related_name="payments")
    resident = models.ForeignKey("residents.Resident", on_delete=models.SET_NULL, null=True, blank=True, related_name="payments")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=30, choices=PaymentMethod.choices)
    reference_code = models.CharField(max_length=100, blank=True, null=True)
    paid_at = models.DateTimeField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING,
    )
    receipt_url = models.URLField(blank=True, null=True)
    verified_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="verified_payments")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Payment #{self.id} - {self.amount}"
