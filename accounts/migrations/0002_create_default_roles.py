from django.db import migrations


def create_default_roles(apps, schema_editor):
    Role = apps.get_model("accounts", "Role")

    roles = [
        "Admin",
        "Manager",
        "Porter",
        "Resident",
    ]

    for role_name in roles:
        Role.objects.get_or_create(
            role_name=role_name
        )


def remove_default_roles(apps, schema_editor):
    Role = apps.get_model("accounts", "Role")

    Role.objects.filter(
        role_name__in=[
            "Admin",
            "Manager",
            "Porter",
            "Resident",
        ]
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(
            create_default_roles,
            remove_default_roles,
        ),
    ]