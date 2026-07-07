"""
- dunder methods
- init method initializes an instance of a class
- the `self` references to the instance of the class itself
"""
class Dog:
    
    def __init__(self, name, age, height, color):
        # instance attributes
        self.name = name
        self.age = age
        self.height = height
        self.color = color
        self.sleep = False

    # instance methods (funcs within a class)
    def fetch(self, item):
        return f"{self.name} fetch the {item}"
        
    def bark(self):
        return f"{self.name} is barking loudly"
    
    def __str__(self):
        return f"CLASS DOG: {self.name} STR"
    
    def __repr__(self):
        return f"CLASS DOG: {self.name} RPR"


zeus = Dog('Zeus', 15, 33, 'black')
print([zeus])


# fido = Dog('Apollo', color='brown', height=44, age=8)
# print(Dog.bark(fido))
# print(zeus.bark())