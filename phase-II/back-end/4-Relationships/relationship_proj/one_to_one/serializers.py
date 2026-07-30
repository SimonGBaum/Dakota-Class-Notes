from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Passenger, Passport
from many_to_one.serializers import LuggageSerializer

class PassportSerializer(ModelSerializer):
    class Meta:
        model = Passport
        fields = "__all__"
        
class PassengerSerializer(ModelSerializer):
    passport = PassportSerializer(read_only=True)
    luggage_bags = LuggageSerializer(many=True, read_only=True)
    flights = SerializerMethodField(read_only=True)
    
    class Meta:
        model = Passenger
        fields = ['id','name','passport', 'luggage_bags', 'flights']
        
    def get_flights(self, obj):
        return [flight.flight_num for flight in obj.flights.all()]