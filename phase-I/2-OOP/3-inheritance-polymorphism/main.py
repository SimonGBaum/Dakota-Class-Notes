from py_classes.gsds import GermanShepherdDog, ChihuahuaDog
from task_app.tasks import Task, SubTask
from py_classes.wizzard import Wizard
import csv

def create_tasks_from_csv(file_name)->list[Task]:
    # find & open the csv file
    with open(f'./task_app/data/{file_name}.csv', 'r') as csvfile:
        tasks = []
        # I need to read the csvfile as dictionaries
        reader = csv.DictReader(csvfile) # [{}]
        # iterate through each line
        for line in reader:
            # create a task from each line
            new_task = Task(**line)
            tasks.append(new_task)
        # return all tasks created from csv
        return tasks
    
print(
    create_tasks_from_csv('tasks')
)


# subtask_1 = SubTask("upload notes and code")
# subtask_2 = SubTask("upload videos to youtube")
# subtask_3 = SubTask("upload transcripts to slack")
# task = Task(
#     title="Upload todays lesson",
#     subtasks=[subtask_1, subtask_2, subtask_3]
# )

# print(task)


# zeus = GermanShepherdDog('zeus', 15, 33, 'black', True, True, True)
# apollo = GermanShepherdDog('Apollo', 7, 33, 'gold', True, True, True)
# socks = ChihuahuaDog('socks', 7, 33, 'gold', True, True)
# print(zeus.fetch("stick"))
# print(socks.fetch("stick"))

# ANIMAL.speak()=> "Animal Sound"
# Cow(Animal).speak()=> "Mooo"
# Cat(Animal).speak()=> "Meow"