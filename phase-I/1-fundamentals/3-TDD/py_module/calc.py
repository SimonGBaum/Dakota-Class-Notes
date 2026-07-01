# mult_by_two = lambda x: x * 2
def mult_by_two(num):
    if not isinstance(num, int):
        return "Improper Input!"
    return num * 2