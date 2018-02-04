import json

#imports from django
from django.shortcuts import render_to_response
from django.core.urlresolvers import resolve, reverse
from django.template import RequestContext
from django.http import HttpResponse
from django.contrib import messages
from django.utils.translation import ugettext_lazy as _
from django.utils.translation import ugettext
from django.utils.safestring import mark_safe
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

def login(request):
    try:
        pass

    except Exception as e:
        logger.error(e)
        messages.error(request,str(e))
    return render_to_response('login.html',context_instance = RequestContext(request))
