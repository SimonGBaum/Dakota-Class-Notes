from utils.tools import *
from utils.db import *


def run_menu():
    while True:
        selection=input("""
Welcome to the Task Manager
1. Create a Task
6. Quit
What would you like to choose? """)
        print(f"Your choice was {selection}")
        if selection == '6':
            break
        elif selection =='1':
            new_task=create_task()
            print(create_record(new_task))
            print(MY_DB)
        else:
            print("You can't use a menu correctly. Try again")
        
run_menu()
    


    