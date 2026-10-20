from django.contrib import admin

from .models import Announcement, AnnouncementRead, Notification


admin.site.register(Notification)
admin.site.register(Announcement)
admin.site.register(AnnouncementRead)
