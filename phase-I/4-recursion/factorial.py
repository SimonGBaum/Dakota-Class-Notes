def factorial_old(n):
    answer = 1
    while n:
        answer *= n
        n-=1
    return answer

# 5!  = 5*4*3*2*1


def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)


def factorial2(n):
    print(f"factorial({n}) added to the call stack")
    if n == 0:
        print("Base case hit: factorial(0) returns")
        return 1
    
    print(f"factorial({n}) is waiting for a factorial({n -1})")
    result = n * factorial2(n-1)
    print(f"factorial({n}) can now return {result}")
    return result

factorial2(5)