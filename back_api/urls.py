
from django.contrib import admin
from django.urls import path, include
from .views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/', include('back.urls', namespace='back_api')),
    path('api/login/', login_view, name='login_view'),
    path('',include('back.urls', namespace='back'))
]
