from django.conf.urls import patterns, include, url
from rest_framework import routers
from kickstart import views

from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)

urlpatterns = patterns('',
    url(r'^', 'client.views.home', name='home'),
)
