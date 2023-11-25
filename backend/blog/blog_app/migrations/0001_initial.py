# Generated by Django 4.2.7 on 2023-11-23 15:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('pub_date', models.DateField(auto_now_add=True, verbose_name='Дата публикации')),
                ('content', models.TextField(verbose_name='Содержание')),
                ('description', models.CharField(max_length=200, verbose_name='Описание')),
                ('picture_small', models.ImageField(upload_to='', verbose_name='Изображение (маленькое)')),
                ('picture_big', models.ImageField(upload_to='', verbose_name='Изображение (большое)')),
            ],
            options={
                'verbose_name': 'Статья',
                'verbose_name_plural': 'Статьи',
                'ordering': ['pub_date'],
            },
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=200, verbose_name='Текст')),
                ('pub_date', models.DateField(auto_now=True, verbose_name='Дата публикации')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog_app.article')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Владелец')),
            ],
            options={
                'verbose_name': 'Комментарий',
                'verbose_name_plural': 'Комментарии',
                'ordering': ['-pub_date'],
            },
        ),
    ]