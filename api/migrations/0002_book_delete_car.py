# Generated by Django 4.1.7 on 2023-04-05 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('author', models.TextField(blank=True, null=True)),
                ('available', models.BooleanField(blank=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('added_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Car',
        ),
    ]
