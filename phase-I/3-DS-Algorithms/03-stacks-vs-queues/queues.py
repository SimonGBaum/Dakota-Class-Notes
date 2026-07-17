# FIFO
class Queue:
    def __init__(self):
        self._items=[]
    
    def addRight(self, item):
        self._items.append(item)
    
    def removeLeft(self):
        if not self._items:
            raise Exception("Queue is Empty")
        return self._items.pop(0)
    
    def peek(self):
        if not self._items:
            raise Exception("Queue is Empty")
        return self._items[0]
    
my_queue = Queue()
my_queue.addRight("Jim")
my_queue.addRight("Jack")
my_queue.addRight("Johnny")
my_queue.addRight("Jose")

print(my_queue.peek())
jim = my_queue.removeLeft()
print(jim)
print(my_queue.peek())