from django.contrib.auth import logout
from rest_framework.views import APIView
from .services import \
    get_article_objects_for_main_page, \
    user_login, \
    user_register, \
    get_article_fields, \
    get_comments_list, \
    post_article, \
    post_comment
from rest_framework.response import Response
from rest_framework import status


class ArticlesView(APIView):
    """
    API endpoint for all articles
    """

    def get(self, request):
        return Response(
            data=get_article_objects_for_main_page(),
            status=status.HTTP_200_OK
        )


class ArticleView(APIView):
    """
    API endpoint for the article
    """

    def get(self, request, pk):
        """
        input data : pk(article id)
        """
        return Response(
            data={'article': get_article_fields(pk), 'comments': get_comments_list(pk)},
            status=status.HTTP_200_OK
        )

    def post(self, request):
        """
        creating article
        input data: name (article title), content (article text), description (small article description),
                    picture_small (in request FILES), picture_big (in request FILES)
        """
        if request.user.is_authenticated and request.user.is_staff:
            status_article_creation = post_article(request)
            if status_article_creation:
                return Response(
                    data={'message': 'Статья успешно сохранилась'},
                    status=status.HTTP_201_CREATED
                )
            return Response(
                data={'message': 'Все поля должны быть заполнены'},
                status=status.HTTP_409_CONFLICT
            )
        else:
            return Response(
                data={'message': 'Отказано в доступе'},
                status=status.HTTP_405_METHOD_NOT_ALLOWED
            )

    def put(self, request):
        """
        editing article
        """
        pass  # TODO: Article PUT method

    def delete(self, request):
        """
        deleting article
        """
        pass  # TODO: Article DELETE method


class LoginView(APIView):
    """
    API endpoint for user authentication
    """

    def post(self, request):
        """
        input data: username, password
        """
        login_status = user_login(request)
        if login_status:
            return Response(
                data={'message': 'Авторизация прошла успешно'},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                data={'message': 'Неверный логин или пароль'},
                status=status.HTTP_400_BAD_REQUEST
            )


class RegisterView(APIView):
    """
    API endpoint for user registration
    """

    def post(self, request):
        """
        input data: username, password
        """
        reg_status = user_register(request)
        reg_status_list = {
            0: Response(
                data={'message': 'Пользователь с таким username уже существует'},
                status=status.HTTP_409_CONFLICT
            ),
            1: Response(
                data={'message': 'Пользователь успешно зарегистрирован'},
                status=status.HTTP_201_CREATED
            ),
            2: Response(
                data={'message': 'Ошибка при регистрации'},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
        }
        return reg_status_list.get(reg_status)


class CommentView(APIView):
    """
    API endpoint for users comments
    """

    def post(self, request):
        """
        input data: text (comment text), pk (article id where comment placed)
        """
        if request.user.is_authenticated:
            status_comment_creation = post_comment(request)
            if status_comment_creation:
                return Response(
                    data={'message': 'Комментарий успешно сохранен'},
                    status=status.HTTP_201_CREATED
                )
            return Response(
                data={'message': 'Ошибка сохранения'},
                status=status.HTTP_409_CONFLICT
            )
        return Response(
            data={'message': 'Ошибка сохранения. Пользователь не авторизован'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    def put(self, request):
        pass  # TODO: Comment PUT method

    def delete(self, request):
        pass  # TODO: Comment DELETE method


class UserStatusView(APIView):
    """
    API endpoint for checking user authentication
    """
    def get(self, request):
        return Response(
            data={'message': request.user.is_authenticated},
            status=status.HTTP_200_OK
        )


class UserLogoutView(APIView):
    """
    API endpoint for user logout
    """
    def post(self, request):
        logout(request)
        return Response(
            data={'message': 'Пользователь успешно завершил сессию'},
            status=status.HTTP_200_OK
        )
