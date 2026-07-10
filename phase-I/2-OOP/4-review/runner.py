from classes.school import School 

school = School('Ridgemont High') 


# print(school.students)

menu = """
What would you like to do?
Options:
    1. List All Students
    2. View Individual Student <student_id>
    3. Add a Student
    4. Remove a Student <student_id>
    5. Quit
"""

def run_the_menu():
    while True:
        choice = input(menu)
        if choice == '5':
            break
        elif choice == '1':
            school.list_students()
        elif choice == '2':
            student_id = input('Enter student id:')
            student = school.find_student_by_id(student_id)
            if student:
                print(student)
            else:
                print("We found no student with this ID!")
        elif choice == '3':
            print("Lets create a student")
            school.add_a_student()
        elif choice == '4':
            print("Lets remove a student")
            student_id = input('Enter student id:')
            success = school.remove_student_by_id(student_id)
            if success:
                print("Student has been removed")
            else:
                print("Could not find a student matching ID")
        else:
            print("You must choose from 1-5")
run_the_menu()
