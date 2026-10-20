from django.db import migrations


def create_default_roles(apps, schema_editor):
    User = apps.get_model("accounts", "User")

    roles = [
        "ADMIN",
        "PORTER",
        "STUDENT",
        "STAFF",
    ]

    for role in roles:
        User.objects.filter(role=role).update(role=role)


def remove_default_roles(apps, schema_editor):
    User = apps.get_model("accounts", "User")
    User.objects.filter(role__in=["ADMIN", "PORTER", "STUDENT", "STAFF"]).update(role="STUDENT")


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
