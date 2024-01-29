from rest_framework import serializers
from .models import Bus


class BusSerializer(serializers.ModelSerializer):
    seats_available = serializers.ReadOnlyField()
    booked_seat_numbers = serializers.ListField(read_only=True)

    class Meta:
        model = Bus
        fields = '__all__'
