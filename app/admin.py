# your_app_name/admin.py
from django.contrib import admin
from .models import Bus, Seat
from django.core.exceptions import ValidationError
from django.forms import BaseInlineFormSet


class SeatInlineFormSet(BaseInlineFormSet):
    def clean(self):
        super().clean()
        booked_seats = set()

        for form in self.forms:
            if form.cleaned_data and not form.cleaned_data.get('DELETE'):
                seat_number = form.cleaned_data['number']
                if seat_number in booked_seats:
                    raise ValidationError(f"Seat {seat_number} is already booked for this bus.")
                booked_seats.add(seat_number)


class SeatInline(admin.TabularInline):
    model = Seat
    extra = 0
    formset = SeatInlineFormSet


class BusAdmin(admin.ModelAdmin):
    list_display = (
        'bus_id', 'plate_number', 'capacity', 'origin', 'destination', 'departure_time', 'arrival_time', 'status')
    inlines = [SeatInline]

    def seats_label(self, obj):
        return 'Pre Book Seats'

    seats_label.short_description = 'Seats'


@admin.register(Seat)
class SeatAdmin(admin.ModelAdmin):
    list_display = ('bus', 'number')


admin.site.register(Bus, BusAdmin)
