# Generated by Django 5.0.1 on 2024-01-28 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_bus_bus_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bus',
            name='bus_id',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
