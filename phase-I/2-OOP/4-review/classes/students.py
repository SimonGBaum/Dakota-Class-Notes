from classes.people import People

class Student(People):
# LOC should stay within 50-75 characters long
    def __init__(
            self, 
            name:str,
            age:int,
            school_id:str,
            password:str
        ):
        super().__init__(name, age, "Student", password)
        self.school_id = school_id
    
    @staticmethod
    def capture_nums(name):
        age = input(f"Provide the students {name} \n>")
        for char in age:
            if not char.isnumeric():
                print("All values within here should be numeric")
                return Student.capture_nums(name)
        return age

    @classmethod
    def create_stud(cls)->'Student':
        build_stud = {
            'name' : input("Provide the students name \n>"),
            'age' : int(Student.capture_nums('age')),
            'school_id': Student.capture_nums('school_id'),
            'password' : input("Provide the students password \n>"),
        }
        return cls(**build_stud)

    def __str__(self):
        return f"""
{self.name}
---------------
age: {self.age}
id: {self.school_id}
"""

    @property
    def school_id(self)-> str:
        return self._school_id
    
    @school_id.setter
    def school_id(self, val:str) -> None:
        self.handle_id(val)
        self._school_id = val