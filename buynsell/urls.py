from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'buynsell.views.home', name='defaulthome'),
    url(r'^home$', 'buynsell.views.home', name='home'),
    url(r'^login$', 'buynsell.views.login', name='login'),
    # url(r'^buynsell/', include('buynsell.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
)
