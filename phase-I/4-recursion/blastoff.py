def countdown_loop(n):
    while n>0:
        print(n)
        n-=1
    print("Blast Off!")
    
countdown_loop(5)


def countdown_recursive(n):
    if n <= 0:
        print("Blast off!")
        return
    print(n)
    countdown_recursive(n-1)
    
countdown_recursive(5)