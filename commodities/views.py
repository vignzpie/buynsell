# Create your views here.
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
from django.db import connection

from commodities.forms import baseItemForm, propertyForm


def addUpdateItem(request, option ='add'):
    option = option.lower()
    try:
        cursor = connection.cursor()
        #post
        if request.method == 'POST':
            baseItemFormContext = baseItemForm(request.POST, option=option.lower())
        
        #get
        else:
            if option == 'add':
                formsList = {}
                formsList["item"]=baseItemForm
                formsList["property"]=propertyForm
                
            elif option in ['update', 'view']:
                pass
                        
    except Exception as e:
        print str(e)
#     return render_to_response('addItem.html',{"baseItemForm":baseItemFormContext, "itemForm":itemForm}, context_instance = RequestContext(request))
    return render_to_response('addItem.html', {'formsList':formsList }, context_instance = RequestContext(request))

