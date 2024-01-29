# your_app_name/forms.py
from django import forms
from .models import Bus


class BusForm(forms.ModelForm):
    class Meta:
        model = Bus
        fields = '__all__'
        widgets = {
            'status': forms.Select(choices=Bus.STATUS_CHOICES),
        }
