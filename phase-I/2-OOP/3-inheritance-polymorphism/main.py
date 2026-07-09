from py_classes.gsds import GermanShepherdDog, ChihuahuaDog
from py_classes.tasks import Task
from py_classes.wizzard import Wizard


zeus = GermanShepherdDog('zeus', 15, 33, 'black', True, True, True)
apollo = GermanShepherdDog('Apollo', 7, 33, 'gold', True, True, True)
socks = ChihuahuaDog('socks', 7, 33, 'gold', True, True)
print("All",len(apollo.all_dogs))
print("GSD",len(apollo.all_gsd_dogs))
print("CHIHUAHUA",len(socks.all_chihuahua_dogs))

