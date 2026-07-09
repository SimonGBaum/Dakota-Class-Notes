from py_classes.dogs import Dog

class GermanShepherdDog(Dog):
    BREED = "German Shepherd"
    all_gsd_dogs = []
    def __init__(
            self, 
            name:str, 
            age:int, 
            height:int, 
            color:str,
            trained:bool,
            guard:bool,
            ksa:bool
        )->'GermanShepherdDog':
        # ATTR BELONG TO DOG (PARENT)
        # Dog.__init__(self, name, age, height, color)
        super().__init__(name, age, height, color)
        self.trained = trained
        self.guard = guard
        self.ksa = ksa
        GermanShepherdDog.all_gsd_dogs.append(self)
    
    def fetch(self, item:str) -> str:
        return f"{self.name} is fetching a LARGE {item}"

class ChihuahuaDog(Dog):
    BREED = 'Chihuahua'
    all_chihuahua_dogs = []

    def __init__(self, name:str, age:int, height:int, color:str, purse_dog:bool, will_bite:bool)-> 'ChihuahuaDog':
        super().__init__(name, age, height, color)
        self.purse_dog = purse_dog
        self.will_bite = will_bite
        ChihuahuaDog.all_chihuahua_dogs.append(self)

    def fetch(self, item:str) -> str:
        """
        example of why this is important
        """
        return f"{self.name} is fetching a SMALL {item}"