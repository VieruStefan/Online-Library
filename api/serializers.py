from rest_framework.serializers import ModelSerializer
from .models import Car
class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'
        # fields = ['name', 'manufacturer']