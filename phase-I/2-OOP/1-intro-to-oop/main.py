# from py_classes.dogs import Dog, say_hello

# zeus = Dog('zeus', 15, 33, 'black')

# try:
#     zeus.age = "twenty"
# except Exception as e:
#     print(e)

"""
DECORATORS
funcs that take in a func
- prefire actions
- postfire actions
"""

def my_decorator(func):
    def wrapper():
        print("These are my prefire actions")
        print(func())
        print("These are my postfire actions")
        return "wrapper comp"
    return wrapper

@my_decorator
def say_hello():
    return "HELLO I am the main function"


print(say_hello())
