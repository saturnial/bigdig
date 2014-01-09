from django.conf.urls import patterns, include, url
from rest_framework import routers
from api import views

from django.contrib import admin
admin.autodiscover()

# By default, Django REST framework appends a trailing slash to every api end point.
# Conversely, AngularJS's $resource removes said trailing slash.
# We falsify the trailing_slash parameter to synchronize the two.
# We also specify the following global setting in settings.py: APPEND_SLASH = False
# See the below article for more detail:
# http://www.masnun.com/2013/09/18/django-rest-framework-angularjs-resource-trailing-slash-problem.html

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'projects', views.ProjectViewSet)
router.register(r'photos', views.PhotoViewSet)
# router.register(r'users', views.UserViewSet)
# router.register(r'contributions', views.ContributionViewSet)

urlpatterns = patterns('',
# TODO(jmylen): Finalize integration with Facebook login.
#   url(r'^login/', 'client.views.login', name='login'),
#   url(r'^facebook/', include('django_facebook.urls')),
#   url(r'^accounts/', include('django_facebook.auth_urls')),
   url(r'^api/', include(router.urls)),
   url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
   )
