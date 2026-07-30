from rest_framework.serializers import ModelSerializer
from .models import LuggageBag

class LuggageSerializer(ModelSerializer):
    class Meta:
        model = LuggageBag
        fields = "__all__"