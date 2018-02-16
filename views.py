'''
Created on Feb 15, 2018
@author: bens
'''
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.core.urlresolvers import reverse






def login(request):
    return render_to_response('login.html',context_instance=RequestContext(request))





def home(request):
    return render_to_response('home.html',context_instance=RequestContext(request))


def logout(request):
    request.session.flush()
    return HttpResponse(request, reverse('home'))




def handler404(request):
    response = render_to_response('404.html', {}, context_instance=RequestContext(request))
    response.status_code = 404
    return response

def handler500(request):
    response = render_to_response('500.html', {}, context_instance=RequestContext(request))
    response.status_code = 500
    return response