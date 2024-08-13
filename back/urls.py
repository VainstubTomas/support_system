from django.urls import path
from back.views import ClientDetail, ClientList, RegisterView, LoginView, UserView, LogoutView

app_name = 'back'

urlpatterns = [
    path("",ClientList.as_view(), name="listcreate"),
    path("<int:pk>/",ClientDetail.as_view(), name="detailcreate"),
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogoutView.as_view())
]


#<int:pk> sirve para aclarar que ese link se pasara un entero y una primary key

"""En este caso utilizado para pasar el numero de id del propio user,
es entero y funciona como pk"""