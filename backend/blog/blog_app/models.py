from django.db import models
from django.contrib.auth.models import User


class Article(models.Model):
    """Model for article in blog"""

    name = models.CharField(
        max_length=100,
        verbose_name='Заголовок',
        null=False
    )
    pub_date = models.DateField(
        auto_now_add=True,
        verbose_name='Дата публикации',
        null=False
    )
    content = models.TextField(
        verbose_name='Содержание',
        null=False
    )
    description = models.CharField(
        max_length=200,
        verbose_name='Описание',
        null=False
    )
    picture_small = models.ImageField(
        verbose_name='Изображение (маленькое)',
        null=False
    )
    picture_big = models.ImageField(
        verbose_name='Изображение (большое)',
        null=False
    ) 

    amount_comments = models.BigIntegerField(
        verbose_name='Количество комментариев',
        default=0
    )

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['pub_date']
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'


class Comment(models.Model):
    """User comment to the article"""

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Владелец',
        null=False
    )
    article = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        null=False
    )
    text = models.CharField(
        max_length=200,
        verbose_name='Текст',
        null=False
    )
    pub_date = models.DateField(
        auto_now_add=True,
        verbose_name='Дата публикации',
        null=False
    )

    def __str__(self):
        return self.user

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
        ordering = ['-pub_date']


