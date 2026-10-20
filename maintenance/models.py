from django.db import models


class MaintenancePriority(models.TextChoices):
    LOW = "LOW", "Low"
    MEDIUM = "MEDIUM", "Medium"
    HIGH = "HIGH", "High"
    URGENT = "URGENT", "Urgent"


class MaintenanceStatus(models.TextChoices):
    OPEN = "OPEN", "Open"
    IN_PROGRESS = "IN_PROGRESS", "In Progress"
    RESOLVED = "RESOLVED", "Resolved"
    CLOSED = "CLOSED", "Closed"


class MaintenanceRequest(models.Model):
    room = models.ForeignKey("hostels.Room", on_delete=models.CASCADE, related_name="maintenance_requests")
    resident = models.ForeignKey("residents.Resident", on_delete=models.CASCADE, related_name="maintenance_requests")
    issue_type = models.CharField(max_length=100)
    description = models.TextField()
    priority = models.CharField(
        max_length=20,
        choices=MaintenancePriority.choices,
        default=MaintenancePriority.MEDIUM,
    )
    status = models.CharField(
        max_length=20,
        choices=MaintenanceStatus.choices,
        default=MaintenanceStatus.OPEN,
    )
    assigned_to = models.ForeignKey("accounts.Staff", on_delete=models.SET_NULL, null=True, blank=True, related_name="assigned_maintenance")
    created_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.issue_type} - {self.room}"
