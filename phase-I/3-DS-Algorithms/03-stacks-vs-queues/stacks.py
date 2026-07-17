# LIFO / FILO


# python deque

class Stack:
    def __init__(self):
        self._items = []
    
    def addTop(self, item):
        self._items.append(item)    
        
    def removeTop(self):
        if not self._items:
            raise Exception("Stack is Empty")
        return self._items.pop()
    
    def peek(self):
        if not self._items:
            raise Exception("Stack is Empty")
        return self._items[-1]
    
my_stack = Stack()
my_stack.addTop("Jim")
my_stack.addTop("Jack")
my_stack.addTop("Johnny")
my_stack.addTop("Jose")
print(my_stack.peek())
jose = my_stack.removeTop()
print(jose)
print(my_stack.peek())
my_stack.addTop("Jacob")
print(my_stack.peek())

# top
# ┌─────┐
# │ c() │
# ├─────┤
# │ b() │
# ├─────┤
# │ a() │
# └─────┘
# bottom

def a(n: int):
    print("a has been added the stack")
    b(n)
    print("a removed from the stack")

def b(n: int):
    print("b has been added the stack")
    c(n)
    print("b removed from the stack")


def c(n: int):
    print("c has been added the stack")
    n / 0
    print("c removed from the stack")

a(5)
