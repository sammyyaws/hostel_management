from django.db import models


class AuditLog(models.Model):
    actor = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="audit_logs")
    action = models.CharField(max_length=200)
    entity_type = models.CharField(max_length=100, blank=True, null=True)
    entity_id = models.PositiveIntegerField(blank=True, null=True)
    details = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.action} by {self.actor}"


class Report(models.Model):
    title = models.CharField(max_length=200)
    report_type = models.CharField(max_length=100)
    parameters = models.JSONField(blank=True, null=True)
    created_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="reports")
    generated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-generated_at"]

    def __str__(self):
        return self.title
