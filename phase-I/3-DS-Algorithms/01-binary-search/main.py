names = ["Alice", "Ben", "Carla", "Derek", "Elena", "Frank", "Grace", "Hugo", "Isla", "Jack"]

# return true/false pending on whether the given parameter is found within the iterable structure

numbers = [3, 8, 15, 22, 34, 41, 50, 63, 77, 89]
# worse scenarios:
# 1. value is not within the iterable structure
# 2. the value is the last ele within the iterable structure

def binary_search(lst, val):
    left_point = 0
    right_point = len(lst) - 1
    iterations = 1
    while left_point <= right_point:
        middle_point = (left_point + right_point)//2
        print(iterations, lst[middle_point])
        iterations += 1
        if lst[middle_point] < val:
            left_point = middle_point + 1
        elif lst[middle_point] > val:
            right_point = middle_point - 1
        else:
            return True
    return False

print(
    binary_search(names, "Isla")
)

# def simple_search(lst, val):
#     iteration = 1
#     for ele in lst:
#         print(iteration)
#         iteration += 1
#         if ele == val:
#             return True
#     return False



# print(
#     simple_search(numbers, 89)
# )