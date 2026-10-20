from django.db import models


class ResidentStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"
    ACTIVE = "ACTIVE", "Active"
    CHECKED_OUT = "CHECKED_OUT", "Checked Out"
    SUSPENDED = "SUSPENDED", "Suspended"


class Resident(models.Model):
    student = models.ForeignKey(
        "accounts.Student",
        on_delete=models.PROTECT,
        related_name="resident_records",
    )
    check_in_date = models.DateField(blank=True, null=True)
    check_out_date = models.DateField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=ResidentStatus.choices,
        default=ResidentStatus.PENDING,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Resident: {self.student.full_name}"
