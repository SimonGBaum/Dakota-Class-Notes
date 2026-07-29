from django.core.exceptions import ValidationError


def title_format_validate(value:str):
    if value != value.title():
        raise ValidationError(
            message = "\"%(value)s\" must be in title format.",
            params = { "value" : value}
        )