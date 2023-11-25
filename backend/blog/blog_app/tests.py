from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.contrib.auth.models import User
from .models import Article


class TestBlog(TestCase):

    def test_RegUser(self):
        test_user_reg = self.client.post('/blog/api/v1/register', data={'username': 'Grishka', 'password': '12ww1w04ro'})
        self.assertEqual(test_user_reg.status_code, 201)
        test_user_is_authenticated_after_register = self.client.get('/blog/api/v1/is_authenticated')
        self.assertEqual(test_user_is_authenticated_after_register.data.get('message'), True)
        self.client.post('blog/api/v1/logout')

    def test_LogUser(self):
        user = User.objects.create_user(username='Grishka', password='12ww1w04ro')
        user.save()
        test_log_user = self.client.post('/blog/api/v1/login', data={'username': 'Grishka', 'password': '12ww1w04ro'})
        self.assertEqual(test_log_user.status_code, 200)
        test_user_is_authenticated_after_log = self.client.get('/blog/api/v1/is_authenticated')
        self.assertEqual(test_user_is_authenticated_after_log.status_code, 200)

    def test_ArticleView(self):
        user = User.objects.create_user(username='Grishka', password='12ww1w04ro')
        user.is_staff = True
        user.save()
        self.client.post('/blog/api/v1/login', data={'username': 'Grishka', 'password': '12ww1w04ro'})
        small_image = SimpleUploadedFile(name='small_image.jpg', content=b'my_image_content', content_type='image/jpeg')
        big_image = SimpleUploadedFile(name='big_image.jpg', content=b'my_image_content', content_type='image/jpeg')
        test_article_creation = self.client.post(
            '/blog/api/v1/article',
            data={
                'name': 'Good Article',
                'content': 'This is test article about sth interesting',
                'description': 'Small article',
                'picture_small': small_image,
                'picture_big': big_image,
            }
        )
        self.assertEqual(test_article_creation.status_code, 201)
        test_articles_view = self.client.get('/blog/api/v1/articles_list')
        self.assertEqual(test_articles_view.data[0].get('id'), 1)
        test_article_view = self.client.get('/blog/api/v1/article/1')
        self.assertEqual(test_article_view.data.get('article').get('id'), 1)

    def test_CommentView(self):
        user = User.objects.create_user(username='Grishka', password='12ww1w04ro')
        user.save()
        self.client.post('/blog/api/v1/login', data={'username': 'Grishka', 'password': '12ww1w04ro'})
        small_image = SimpleUploadedFile(name='small_image.jpg', content=b'my_image_content', content_type='image/jpeg')
        big_image = SimpleUploadedFile(name='big_image.jpg', content=b'my_image_content', content_type='image/jpeg')
        article = Article.objects.create(
            name='Good Article',
            content='This is test article about sth interesting',
            description='Small article',
            picture_small=small_image,
            picture_big=big_image
        )
        article.save()
        article_id = article.id
        post_article = self.client.post('/blog/api/v1/comment', data={'text': 'Goood job!', 'pk': article_id})
        self.assertEqual(post_article.status_code, 201)

