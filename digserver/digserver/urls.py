from django.conf.urls import patterns, include, url
from rest_framework import routers
from kickstart import views

from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)

urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')))
