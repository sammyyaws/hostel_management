from django.contrib import admin

from .models import (
    Hostel,
    HostelSetting,
    Room,
    RoomBed,
    RoomMedia,
    RoomType,
)


admin.site.register(Hostel)
admin.site.register(RoomType)
admin.site.register(Room)
admin.site.register(RoomBed)
admin.site.register(RoomMedia)
admin.site.register(HostelSetting)
