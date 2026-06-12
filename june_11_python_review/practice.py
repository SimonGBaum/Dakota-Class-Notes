age = 36 # int
price = 19. #float
prince = 19.99 # also float
name = "Kevin"
my_name = 'Kevin'
my_paragraph="""Hello,
today is a day
the day before tomorrow
the day after yesterday
"""
is_student = True #bool
is_over_18 =  age > 18 #True

print(my_paragraph)
print(is_over_18)
# =======================

x = 10
y = 3

print(x+y) #add
print(x-y) #subtraction
print(x*y) # multiply
print(x/y) #divide
print(x // y) #9 # Floor Division
print(x % y) #1 # the reminder of division

# ================================

first_name = "Alex"
last_name = "Morgan"
age = 36
full_name = first_name + " " +last_name 
print(full_name)

# F-string
message = f"Hello, my name is {full_name} and I am {age} years old"
print(message.upper())
print(message.lower())
print(message.capitalize())
print(len(message))
 #==================================================
scores = [[85,100], 92, 78, 101]
print(scores)
print(scores[0])
print(scores[0][1]) #100
print(scores[-1]) #101
print(scores[len(scores)-1])

scores.append(95)
print(scores)

scores[2]=90
print(scores)
print(len(scores))
scores2 = [[85,100], 92, 78, 101,101]

scores2.remove(101) #removes the first thing that matches
print(scores2)

testarr=[85,100,55,33,44]
print(testarr[1:4])

scores3 = [[85,100,55,33,44], 92, 78, 101,101]
print(scores3[0][1:4])

# ==================
student ={
    "name" : "Alex",
    "age"  : 25,
    "grade" : 92,
    "is_enrolled": True,
    "fav_foods": ["taco","dimsum","pizza", "sushi"]
}
print(student)
print(student["name"])
print(type(student["name"]))
print(student["is_enrolled"])
print(type(student["is_enrolled"]))

student["name"]="Alexandra"
print(student)

print(student["fav_foods"])
print(type(student["fav_foods"]))

print(student["fav_foods"][0])

# ====================

grade = student["grade"]

if grade >= 90:
    print("Excellent work!")
elif grade >= 70:
    print("passing")
else:
    print("Need Improvement")

# =====================
scores =  [85,91,78,100]

total = 0
for score in scores:
    total += score
print(total)

for index in range(len(scores)):
    # print(index)
    print(scores[index])

print(list(range(len(scores))))
# =====================

student ={
    "name" : "Alex",
    "age"  : 25,
    "grade" : 92,
    "is_enrolled": True,
    "fav_foods": ["taco","dimsum","pizza", "sushi"]
}

for key in student:
    print(key)
    print(type(key))
    
for key, value in student.items():
    print(key, value)
    if key == "fav_foods":
        print(type(value))
        print(type(value[0]))

# ====================

def add_number(a, b):
    return a + b

print(type(add_number(4,5)))
