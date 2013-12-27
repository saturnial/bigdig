from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^', 'client.views.home', name='home'),
)
