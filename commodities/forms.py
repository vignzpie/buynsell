'''
Created on Feb 4, 2018

@author: vignesh
'''

from django import forms
from django.core.validators import MinValueValidator




class baseItemForm(forms.Form):
    
    def __init__(self, *args, **kwargs):
        itemDict = kwargs.pop("itemDict", {})
        option = kwargs.pop("option", None)
        self.option = option;
        super(baseItemForm, self).__init__(*args, **kwargs)
#         QUEUE_STRATEGY=[]
#         
#         QUEUE_TYPE = (('call','Call',),('chat','Chat',),('email','Email',),('fb','Facebook',),)
#         type=itemDict.get('queue_type', None)
#         if type:
#             QUEUE_TYPE=((type,type.capitalize(),),)
# 
#         QUEUE_DIRECTION_DICT={'in' : "Inbound", 'out' : "Outbound",}
#         
#         QUEUE_DIRECTION = QUEUE_DIRECTION_DICT.items()#(("in", "Inbound"), ("out", "Outbound"),)
#         direction=itemDict.get('queue_direction', None)
#         if direction:
#             QUEUE_DIRECTION=((direction,QUEUE_DIRECTION_DICT[direction],),)
        itemTypeDict = {'property' : "property",}
        itemType = itemTypeDict.items()
        itemStatus = [(1 , 'Active') , (0, 'Inactive')]
#         self.fields['queue_id'] = forms.CharField(max_length=45,required=True, initial= itemDict.get('queue_id', ""), widget=forms.TextInput(attrs={'placeholder': "special characters are not allowed"}))
#         self.fields['tenant_id'] = forms.CharField(max_length=15,required=False, initial= itemDict.get('tenant_id', ""))
#         self.fields['queue_desc'] = forms.CharField(max_length=45, required=False, initial= itemDict.get('queue_desc', ""))
#         self.fields['queue_name'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('queue_name', ""))
#         self.fields['item_type'] = forms.IntegerField(required=False, initial= itemDict.get('item_type', ""), validators=[MinValueValidator(1)])
#         self.fields['queue_strategy'] = forms.ChoiceField(required=True, choices=QUEUE_STRATEGY, initial= itemDict.get('queue_strategy',))
#         self.fields['queue_type'] = forms.ChoiceField(required=True,choices=QUEUE_TYPE, initial= itemDict.get('queue_type', ""))
#         self.fields['queue_status'] = forms.ChoiceField(required=True, choices=STATUS, initial= itemDict.get('queue_status', 1))
#         CharField because MySQL doesnt like forms.DateTimeField format
#         self.fields['queue_created_time'] = forms.CharField(required=False, initial= itemDict.get('queue_created_time', ""))
#         self.fields['queue_modified_time'] = forms.DateTimeField(required=False, initial= itemDict.get('queue_modified_time', ""))
#         self.fields['queue_modified_by'] = forms.CharField(max_length=45, required=False, initial= itemDict.get('queue_modified_by', ""))

        self.fields['item_id'] = forms.IntegerField(required=True, initial= itemDict.get('item_id', ""), validators=[MinValueValidator(1)])
        self.fields['item_type'] = forms.ChoiceField(required=True, choices=itemType, initial= itemDict.get('item_type', "property"))
        self.fields['item_status'] = forms.ChoiceField(required=True, choices=itemStatus, initial= itemDict.get('item_status', 1))
        
        
        
        
        
        
class propertyForm(forms.Form):
    def __init__(self, *args, **kwargs):
        itemDict = kwargs.pop("itemDict", {})
        option = kwargs.pop("option", None)
        self.option = option;

        super(propertyForm, self).__init__(*args, **kwargs)

        self.fields['item_id'] = forms.IntegerField(required=True, initial= itemDict.get('item_id', ""), validators=[MinValueValidator(1)])
        self.fields['posted_by'] = forms.CharField(max_length=225, required=True, initial= itemDict.get('posted_by', ""))
        self.fields['posted_datestamp'] = forms.DateField(required=True, initial= itemDict.get('posted_datestamp', ""))
        self.fields['posted_timestamp'] = forms.DateTimeField(required=True, initial= itemDict.get('posted_timestamp', ""))
        self.fields['modified_by'] = forms.CharField(max_length=225, required=True, initial= itemDict.get('modified_by', ""))
        self.fields['modified_datestamp'] = forms.DateField(required=True, initial= itemDict.get('modified_datestamp', ""))
        self.fields['modified_timestamp'] = forms.DateTimeField(required=True, initial= itemDict.get('modified_timestamp', ""))
        self.fields['title'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('title', ""))
        self.fields['price'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('price', ""))
        self.fields['category'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('category', ""))
        self.fields['address'] = forms.CharField(widget=forms.Textarea(attrs={'cols': 10, 'rows': 1}),max_length=5000,required=False)
        self.fields['area'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('area', ""))
        self.fields['city'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('city', ""))
        self.fields['postal_code'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('postal_code', ""))
        self.fields['district'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('district', ""))
        self.fields['state'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('state', ""))
        self.fields['country'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('country', ""))
        self.fields['latitude'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('latitude', ""))
        self.fields['longitude'] = forms.CharField(max_length=1024, required=True, initial= itemDict.get('longitude', ""))
        self.fields['description'] = forms.CharField(max_length=5000, required=True, initial= itemDict.get('description', ""))
        self.fields['tags'] = forms.CharField(max_length=5000, required=True, initial= itemDict.get('tags', ""))
        self.fields['no_rooms'] = forms.IntegerField(required=False, validators=[MinValueValidator(1)])
        self.fields['no_bedrooms'] = forms.IntegerField(required=False, validators=[MinValueValidator(1)])
        self.fields['area_living'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('area_living', ""))
        self.fields['built_on'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('built_on', ""))
        self.fields['house_style'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('house_style', ""))
        self.fields['roof'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('roof', ""))
        self.fields['no_floors'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('no_floors', ""))
        self.fields['flooring'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('flooring', ""))
        self.fields['land_size'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('land_size', ""))
        self.fields['east_side_land'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('east_side_land', ""))
        self.fields['west_side_land'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('west_side_land', ""))
        self.fields['south_side_land'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('south_side_land', ""))
        self.fields['north_side_land'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('north_side_land', ""))
        self.fields['selling_type'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('selling_type', ""))
        self.fields['future_improvements'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('future_improvements', ""))
        self.fields['future_development_area'] = forms.CharField(max_length=45, required=True, initial= itemDict.get('future_development_area', ""))
        self.fields['amenities'] = forms.CharField(max_length=5000, required=True, initial= itemDict.get('amenities', ""))
        self.fields['nearby'] = forms.CharField(max_length=5000, required=True, initial= itemDict.get('nearby', ""))

