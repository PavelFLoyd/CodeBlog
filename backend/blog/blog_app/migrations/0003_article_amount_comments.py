# Generated by Django 4.2.7 on 2023-11-25 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0002_comment_delete_comments'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='amount_comments',
            field=models.BigIntegerField(default=0, verbose_name='Количество комментариев'),
        ),
    ]
