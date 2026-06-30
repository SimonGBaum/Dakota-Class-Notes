students = [
    {"name": "Dom", "score": 88},
    {"name": "Patty", "score": 73},
    {"name": "Nyzere", "score": 95},
    {"name": "Simon", "score": 61},
    {"name": "Albert", "score": 47},
    {"name": "Maya", "score": 100},
    {"name": "Jordan", "score": 55},
]
sorted_students = list(sorted(
    students,
    key= lambda stud : stud.get("score"),
    reverse=False
))
print(sorted_students)
# nums = [1, 2, 3, 4]
# nums_two = list(map(
#     lambda num : num * 2,
#     nums
# ))
# print(nums_two)
# is_even = lambda num : num % 2 == 0
# def my_filter(func, iter):
#     filtered_outcome = []
#     for ele in iter:
#         if func(ele):
#             filtered_outcome.append(ele)
#     return filtered_outcome

# ans = list(filter(is_even, nums))
# print(ans)

# mult_by_two = lambda num : num * 2

# print(
#     mult_by_two(4)
# )
# students = [
#     {"name": "Dom", "score": 88},
#     {"name": "Patty", "score": 73},
#     {"name": "Nyzere", "score": 95},
#     {"name": "Simon", "score": 61},
#     {"name": "Albert", "score": 47},
#     {"name": "Maya", "score": 100},
#     {"name": "Jordan", "score": 55},
# ]

# def assign_ltr_grade(score=None):
#     if score == None:
#         return "F"
    
#     grades = {
#         90: "A",
#         80 : "B",
#         70 : "C",
#         0 : "F",
#     }

#     if score >= 90:
#         return grades[90]
#     elif score >= 80:
#         return grades[80]
#     elif score >= 70:
#         return grades[70]
#     else:
#         return grades[0]

# for stud in students:
#     stud['ltr_grade'] = assign_ltr_grade(stud.get("score"))

# print(students)
# dakota = {
#     "instructors": [
#         {"lead" : {
#             "name":"Francisco",
#             "email":"francisco@codeplatoon.org"
#         }},
#         {"instructor": {
#             "name":"kevin",
#             "email":"kevin@codeplatoon.org"
#         }}
#     ],
#     "students":[
#         "Dom",
#         "Patty",
#         "Nyzere",
#         "Simon",
#         "Albert"
#     ]
# }
# for stud in dakota['students']:
#     print(stud)
# start = 0
# while start <= 10:
#     print(start)
#     start += 2


# user = {
#     "name":"francisco",
#     "email":"fr@Fr.com"
# }
# print(user.items())
# for key, val in user.items():
#     print(key, val)

# print(list(enumerate(my_list)))
# [0,1,2,3,4]
# for num in my_list:
#     print(num, my_list[num])

# for idx in range(len(my_list)):
#     print(idx, my_list[idx])


# """
# The Range function
# - returns a list of numbers
# - can take up to 3 params
#     - req end exclusive (not included in output)
#     - opt start inclusive (included in output)
#     - opt step
# all even numbers 0-100 100 is included
# """

# print(list(
#     range(2, 101, 2)
# ))
# #  can someone drink
# user = {
#     "age": 20,
#     "has_id": False
# }
# if user.get('age') >= 21 or user.get('has_id'):
#     print("can drink")
# else:
#     print("can't drink")


# give us the grade that a student achieves based on score

# score = 30
# print( "pass" if score >= 50 else  "fail")
# if score >= 50:
#     print("pass")
# else:
#     print("fail")

# grades = {
#     90: "A",
#     80 : "B",
#     70 : "C",
#     0 : "F",
# }

# score = 89
# if score >= 90:
#     print(grades[90])
# elif score >= 80:
#     print(grades[80])
# else:
#     print("failed")

# # key:value pairs
# user = {
#     'email' : 'fr@fr.com',
#     'password' : 'fr'
# }

# print(user.items())

# import requests
# response = requests.get('https://pokeapi.co/api/v2/pokemon/squirtle')
# response = response.json()

# print(response['moves'][1].get("move")['name'])


# user["name"] = 'Francisco'
# del user['password']

# print(user)

# a collection of different data types
# O[1] Instant Operation
# my_list = ["they're fruits", True, 8]
# my_list.pop(1)
# print(my_list)

# empty = None

# print(type(empty))

# lever = False
# a_string = "just a string"
# print(len(a_string) == 5)
# num = 1

# print("EVEN OR NOT", num % 2)
# print(num * 2)
# print('DIV', num / 2)
# print('FLRDIV', num // 2)
# print('PWR', num ** 2)
# print('ADD', num + 2)
# print('SUB', num - 2)

# my_name = 'My name is Francisco'

# my_name2 = 'his' + my_name[2:]

# num = 8

# my_example = f"The number in var is {num * 4}"

# print(my_example)

