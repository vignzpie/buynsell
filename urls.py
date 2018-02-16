from django.conf.urls import patterns, include, url 

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^', include('buynsell.urls')),
    # Examples:
    # url(r'^$', 'txsq_v3.views.home', name='home'),
    # url(r'^txsq_v3/', include('txsq_v3.foo.urls')),

)

urlpatterns += patterns('',
    url(r'^items', include('commodities.urls')),
    # Examples:
    # url(r'^$', 'txsq_v3.views.home', name='home'),
    # url(r'^txsq_v3/', include('txsq_v3.foo.urls')),

)


