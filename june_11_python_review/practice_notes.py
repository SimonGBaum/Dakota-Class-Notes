# ============================================================
# Python Basics Review
# ============================================================


# ------------------------------------------------------------
# 1. Variables and basic data types
# ------------------------------------------------------------

age = 36                 # int: whole number
price = 19.99            # float: decimal number
name = "Alex"            # string: text
is_student = True        # boolean: True or False

print(age)
print(price)
print(name)
print(is_student)


# ------------------------------------------------------------
# 2. Doing basic operations
# ------------------------------------------------------------

x = 10
y = 3

print(x + y)   # addition
print(x - y)   # subtraction
print(x * y)   # multiplication
print(x / y)   # division, gives a float
print(x // y)  # floor division, chops off decimal
print(x % y)   # modulo, gives remainder


# ------------------------------------------------------------
# 3. Strings
# ------------------------------------------------------------

first_name = "Alex"
last_name = "Morgan"
age = 36
full_name = first_name + " " + last_name
print(full_name)

# f-strings are usually cleaner
message = f"Hello, my name is {first_name} and I am {age} years old."
print(message)

print(first_name.upper())
print(last_name.lower())
print(len(full_name))


# ------------------------------------------------------------
# 4. Lists
# ------------------------------------------------------------

scores = [85, 92, 78, 100]

print(scores)
print(scores[0])     # first item
print(scores[-1])    # last item

scores.append(95)    # add to the end
print(scores)

scores[1] = 90       # change an item
print(scores)

print(len(scores))


# ------------------------------------------------------------
# 5. Dictionaries
# ------------------------------------------------------------

student = {
    "name": "Alex",
    "age": 25,
    "grade": 92,
    "is_enrolled": True
}

print(student)
print(student["name"])
print(student["grade"])

student["grade"] = 95
student["email"] = "alex@example.com"

print(student)


# ------------------------------------------------------------
# 6. If statements
# ------------------------------------------------------------

grade = student["grade"]

if grade >= 90:
    print("Excellent work!")
elif grade >= 70:
    print("Passing")
else:
    print("Needs improvement")


# ------------------------------------------------------------
# 7. For loops with lists
# ------------------------------------------------------------

scores = [85, 92, 78, 100]

for score in scores:
    print(score)

total = 0

for score in scores:
    total = total + score

average = total / len(scores)

print(f"Average score: {average}")


# ------------------------------------------------------------
# 8. For loops with dictionaries
# ------------------------------------------------------------

student = {
    "name": "Alex",
    "age": 36,
    "grade": 92
}

for key in student:
    print(key, student[key])

# A cleaner way:
for key, value in student.items():
    print(f"{key}: {value}")


# ------------------------------------------------------------
# 9. Functions
# ------------------------------------------------------------

def greet(name):
    return f"Hello, {name}!"

print(greet("Alex"))
print(greet("Jordan"))


def add_numbers(a, b):
    return a + b

result = add_numbers(5, 7)
print(result)


# ------------------------------------------------------------
# 10. Function using list, loop, and if statement
# ------------------------------------------------------------

def get_passing_scores(scores):
    passing_scores = []

    for score in scores:
        if score >= 70:
            passing_scores.append(score)

    return passing_scores


scores = [85, 62, 90, 45, 73]

passing = get_passing_scores(scores)

print(passing)


# ------------------------------------------------------------
# 11. Function using a dictionary
# ------------------------------------------------------------

def describe_student(student):
    return f"{student['name']} has a grade of {student['grade']}."


student = {
    "name": "Alex",
    "grade": 95
}

description = describe_student(student)

print(description)


# ------------------------------------------------------------
# 12. Putting it all together
# ------------------------------------------------------------

students = [
    {"name": "Alex", "grade": 95},
    {"name": "Jordan", "grade": 82},
    {"name": "Taylor", "grade": 67},
    {"name": "Casey", "grade": 74}
]


def print_student_report(students):
    for student in students:
        name = student["name"]
        grade = student["grade"]

        if grade >= 70:
            status = "passing"
        else:
            status = "not passing"

        print(f"{name} has a grade of {grade} and is {status}.")


print_student_report(students)