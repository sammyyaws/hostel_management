
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User, Student, Staff


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    ordering = ("email",)
    list_display = ("email", "role", "status", "is_staff", "is_active")
    list_filter = ("role", "status", "is_staff", "is_active")
    search_fields = ("email",)
    readonly_fields = ("last_login", "created_at", "updated_at")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Role and status", {"fields": ("role", "status")}),
        ("Permissions", {
            "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
        }),
        ("Dates", {"fields": ("last_login", "created_at", "updated_at")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "role", "password1", "password2", "is_staff", "is_superuser"),
        }),
    )


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("full_name", "student_id", "user", "program", "year_of_study", "status")
    search_fields = ("full_name", "student_id", "user__email")
    list_filter = ("status", "year_of_study")


@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ("full_name", "user", "department", "phone", "status")
    search_fields = ("full_name", "user__email", "phone")
    list_filter = ("status", "department")
