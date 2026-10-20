from django.contrib import admin

from .models import AuditLog, Report


admin.site.register(AuditLog)
admin.site.register(Report)
