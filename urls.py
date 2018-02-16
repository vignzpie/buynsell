'''
Created on Feb 14, 2018
@author: bens
'''
from django.conf.urls import patterns,  url

urlpatterns = patterns('main.views',
     url(r'^$', 'login', name='login'),
     url(r'^logout$','logout',name='logout_url'),
     url(r'^home/', 'home', name='home'),
)