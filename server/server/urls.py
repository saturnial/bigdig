from api import views
from django.conf.urls import patterns, include, url
from django.views.generic.base import RedirectView
from rest_framework import routers

from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'photos', views.PhotoViewSet)
# router.register(r'users', views.UserViewSet)
# router.register(r'contributions', views.ContributionViewSet)

urlpatterns = patterns('',
    url(r'^$', RedirectView.as_view(url='/api/', permanent=True), name='index'),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    )
