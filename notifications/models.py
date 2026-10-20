from django.db import models


class NotificationType(models.TextChoices):
    INFO = "INFO", "Info"
    BOOKING = "BOOKING", "Booking"
    COMPLAINT = "COMPLAINT", "Complaint"
    MAINTENANCE = "MAINTENANCE", "Maintenance"
    ANNOUNCEMENT = "ANNOUNCEMENT", "Announcement"


class Notification(models.Model):
    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="notifications")
    title = models.CharField(max_length=200)
    message = models.TextField()
    type = models.CharField(max_length=30, choices=NotificationType.choices, default=NotificationType.INFO)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class AnnouncementAudience(models.TextChoices):
    ALL = "ALL", "All"
    RESIDENTS = "RESIDENTS", "Residents"
    STAFF = "STAFF", "Staff"
    ADMIN = "ADMIN", "Admin"


class Announcement(models.Model):
    title = models.CharField(max_length=200)
    message = models.TextField()
    audience = models.CharField(max_length=20, choices=AnnouncementAudience.choices, default=AnnouncementAudience.ALL)
    created_by = models.ForeignKey("accounts.User", on_delete=models.PROTECT, related_name="announcements_created")
    created_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(blank=True, null=True)
    expires_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class AnnouncementRead(models.Model):
    announcement = models.ForeignKey(Announcement, on_delete=models.CASCADE, related_name="reads")
    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="announcement_reads")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["announcement", "user"], name="unique_announcement_read")
        ]

    def __str__(self):
        return f"{self.user.email} read {self.announcement.title}"
