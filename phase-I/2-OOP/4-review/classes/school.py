from classes.students import Student
from classes.staff import Staff
import csv

class School:
    
    def __init__(self, name:str) -> 'School':
        self.name = name
        self.students:list[Student] = self.load_csv_data("students")
        self.staff:list[Staff] = self.load_csv_data("staff")

    def add_a_student(self):
        student = Student.create_stud()
        self.students.append(student)
        return True

    def remove_student_by_id(self, stud_id:str) -> bool:
        for stud in self.students:
            if stud.school_id == stud_id:
                self.students.remove(stud)
                return True
        return False

    def list_students(self) -> None:
        for idx in range(len(self.students)):
            stud = self.students[idx]
            print(f"{idx+1}. {stud.name} {stud.school_id}")

    def find_student_by_id(self, stud_id):
        for stud in self.students:
            if stud.school_id == stud_id:
                return stud
        return None

    @classmethod
    def load_csv_data(cls, name_of_file:str) -> list[Student] | list[Staff]:
        with open(f'./data/{name_of_file}.csv', 'r') as csvfile:
            container = []
            reader = csv.DictReader(csvfile) # => list[dict]
            for dct in reader:
                del dct['role']
                dct['age'] = int(dct['age'])
                new_inst = None
                if name_of_file == 'students':
                    new_inst = Student(**dct)
                else:
                    new_inst = Staff(**dct)
                container.append(new_inst)
            return container

    @property
    def name(self) -> str:
        return self._name
    
    @name.setter # validator === constraint
    def name(self, new_name:str)->None:
        if not isinstance(new_name, str):
            raise ValueError("School Name must be a `str`")
        self._name = new_name

    
