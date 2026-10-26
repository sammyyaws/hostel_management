from django.db import models


class HostelStatus(models.TextChoices):
    ACTIVE = "ACTIVE", "Active"
    INACTIVE = "INACTIVE", "Inactive"
    ARCHIVED = "ARCHIVED", "Archived"


class RoomTypeStatus(models.TextChoices):
    ACTIVE = "ACTIVE", "Active"
    INACTIVE = "INACTIVE", "Inactive"


class RoomStatus(models.TextChoices):
    AVAILABLE = "AVAILABLE", "Available"
    OCCUPIED = "OCCUPIED", "Occupied"
    MAINTENANCE = "MAINTENANCE", "Maintenance"
    RESERVED = "RESERVED", "Reserved"


class RoomBedStatus(models.TextChoices):
    AVAILABLE = "AVAILABLE", "Available"
    OCCUPIED = "OCCUPIED", "Occupied"
    MAINTENANCE = "MAINTENANCE", "Maintenance"


class Hostel(models.Model):
    name = models.CharField(max_length=150)
    address = models.TextField()
    description = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=HostelStatus.choices,
        default=HostelStatus.ACTIVE,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class RoomType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    capacity = models.PositiveIntegerField()
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=RoomTypeStatus.choices,
        default=RoomTypeStatus.ACTIVE,
    )

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


#room gender classification
class RoomGender(models.TextChoices):
    MALE = "MALE", "Male"
    FEMALE = "FEMALE", "Female"

class Room(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE, related_name="rooms")
    room_code = models.CharField(max_length=50)
    block = models.CharField(max_length=50, blank=True, null=True)
    floor = models.IntegerField(blank=True, null=True)
    gender=models.CharField(
        max_length=10,
        choices=RoomGender.choices,
        default=RoomGender.MALE,)
    room_type = models.ForeignKey(RoomType, on_delete=models.PROTECT, related_name="rooms")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.PositiveIntegerField()
    status = models.CharField(
        max_length=20,
        choices=RoomStatus.choices,
        default=RoomStatus.AVAILABLE,
    )
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["hostel", "room_code"],
                name="unique_room_code_per_hostel",
            )
        ]
        ordering = ["hostel", "room_code"]

    def __str__(self):
        return f"{self.hostel.name} - {self.room_code}"


class RoomBed(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name="beds")
    bed_label = models.CharField(max_length=50)
    status = models.CharField(
        max_length=20,
        choices=RoomBedStatus.choices,
        default=RoomBedStatus.AVAILABLE,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["room", "bed_label"],
                name="unique_room_bed_label",
            )
        ]
        ordering = ["room", "bed_label"]

    def __str__(self):
        return f"{self.room.room_code} - {self.bed_label}"


class RoomMediaType(models.TextChoices):
    IMAGE = "IMAGE", "Image"
    VIDEO = "VIDEO", "Video"


class RoomMediaCategory(models.TextChoices):
    BEDROOM = "BEDROOM", "Bedroom"
    KITCHEN = "KITCHEN", "Kitchen"
    WASHROOM = "WASHROOM", "Washroom"


class RoomMedia(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name="media")
    media_type = models.CharField(max_length=20, choices=RoomMediaType.choices)
    category = models.CharField(max_length=30, choices=RoomMediaCategory.choices)
    url = models.URLField()
    is_cover = models.BooleanField(default=False)
    sort_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return f"{self.room.room_code} - {self.category} - {self.media_type}"


class HostelSetting(models.Model):
    setting_key = models.CharField(max_length=100, unique=True)
    setting_value = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.setting_key
