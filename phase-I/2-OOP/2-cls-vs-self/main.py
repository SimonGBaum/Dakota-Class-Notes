from py_classes.dogs import GermanShepherdDog
from py_classes.tasks import Task
from py_classes.wizzard import Wizard

gandalf = Wizard('Gandalf')
frieren = Wizard('frieren')
print(gandalf.mana)
print(frieren.mana)
print("Checkpoint")
Wizard.mana = 500
print(gandalf.mana)
print(frieren.mana)

# task_1 = Task("Teach lecture 2")
# task_2 = Task("Upload videos to youtube")

# print(task_1)
# print(task_2)

# GermanShepherdDog('zeus', 15, 33, 'black')
# print(zeus.all_dogs)
# apollo = GermanShepherdDog('Apollo', 7, 33, 'gold')
# print(apollo.all_dogs)
# socks = GermanShepherdDog('socks', 7, 33, 'gold')
# print(socks.all_dogs)

