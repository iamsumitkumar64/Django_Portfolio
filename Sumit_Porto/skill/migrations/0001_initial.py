# Generated by Django 5.1.2 on 2024-12-28 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill_name', models.TextField()),
                ('skill_img', models.FileField(upload_to='skill/')),
            ],
        ),
    ]
