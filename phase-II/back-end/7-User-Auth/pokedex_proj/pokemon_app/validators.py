from django.core.exceptions import ValidationError
import re

def title_format_validate(value:str):
    
    
    
    good_input = re.fullmatch(r'^[A-Z][a-z]*( [A-Z][a-z]*)*$', value)
    # if value != value.title():
    if not good_input:
        raise ValidationError(
            message = "\"%(value)s\" must be in title format.",
            params = { "value" : value}
        )