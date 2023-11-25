from django.urls import path
from .views import ArticlesView, ArticleView, RegisterView, LoginView, CommentView, UserStatusView, UserLogoutView

urlpatterns = [
    path('api/v1/articles_list', ArticlesView.as_view()),
    path('api/v1/login', LoginView.as_view()),
    path('api/v1/register', RegisterView.as_view()),
    path('api/v1/article', ArticleView.as_view()),
    path('api/v1/comment', CommentView.as_view()),
    path('api/v1/is_authenticated', UserStatusView.as_view()),
    path('api/v1/logout', UserLogoutView.as_view()),
    path('api/v1/article/<int:pk>', ArticleView.as_view())
]
