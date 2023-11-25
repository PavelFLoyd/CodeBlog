from .models import Article, Comment
from .serializers import ArticleListSerializer, ArticleSerializer, CommentSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


def post_article(request):
    """
    create new article
    """
    name = request.data.get('name')
    content = request.data.get('content')
    description = request.data.get('description')
    picture_small = request.data.get('picture_small')
    picture_big = request.data.get('picture_big')

    if name and content and description and picture_small and picture_big:
        article = Article(
            name=name,
            content=content,
            picture_small=picture_small,
            picture_big=picture_big
        )
        if article is not None:
            article.save()
            return True
        return False
    return False


def get_comments_list(pk):
    """
    get comments list
    """
    queryset = Comment.objects.filter(article_id=pk)
    serializer = CommentSerializer(queryset, many=True)
    return serializer.data


def post_comment(request):
    """
    create new comment for the article
    """
    text = request.data.get('text')
    article_id = request.data.get('pk')
    user_id = request.user.id
    if text and article_id and user_id:
        comment = Comment(text=text, article_id=article_id, user_id=user_id)
        if comment:
            article = Article.objects.filter(id=article_id).get()
            article.amount_comments += 1
            article.save()
            comment.save()
            return True
        return False
    return False


def get_article_objects_for_main_page():
    """
    get article fields for main page
    """
    queryset = Article.objects.all()
    serializer = ArticleListSerializer(queryset, many=True)
    return serializer.data


def get_article_fields(pk):
    """
    get article fields
    """
    article = Article.objects.filter(id=pk).get()
    serializer = ArticleSerializer(article)
    return serializer.data


def user_login(request):
    """
    login user
    """
    user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
    if user is not None:
        login(request, user)
        return True
    else:
        return False


def user_register(request):
    """
    register user
    """
    if not(User.objects.filter(username=request.data.get('username')).exists()):
        user = User.objects.create_user(
            username=request.data.get('username'),
            password=request.data.get('password')
        )
        if user:
            user.save()
            login(
                request,
                authenticate(
                    request,
                    username=request.data.get('username'),
                    password=request.data.get('password')
                )
            )
            return 1
        else:
            return 2
    else:
        return 0
