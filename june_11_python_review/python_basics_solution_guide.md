# Python Basics Worksheet: Solution Guide

This guide is meant to be shared after students have made a solid attempt.

A useful review question for each answer is:

**What type of value did we pull out, and what did we do with it?**

---

## Exercise 1

```python
city = "Chicago"
temperature = 72
tax_rate = 0.08
has_account = False

# city is a string / str
# temperature is an integer / int
# tax_rate is a float
# has_account is a boolean / bool
```

---

## Exercise 2

```python
items_bought = 4
price_per_item = 6

total_cost = items_bought * price_per_item

print(total_cost)
```

Output:

```python
24
```

---

## Exercise 3

```python
animal = "dog"
name = "Bruno"

sentence = f"{name} is a {animal}."

print(sentence)
```

Output:

```python
Bruno is a dog.
```

---

## Exercise 4

```python
prices = [10, 25, 8, 40]

print(prices[0])
print(prices[-1])
print(prices[1])
print(prices[0] + prices[1])
```

Output:

```python
10
40
25
35
```

---

## Exercise 5

```python
ages = [18, 21, 30, 45]

print(ages[0] / 2)
print(ages[2] + 10)
print(ages[-1] - 5)
print(ages[1] * 2)
```

Output:

```python
9.0
40
40
42
```

Key idea:

```python
ages[0]
```

is the integer `18`, so it can be divided by `2`.

---

## Exercise 6

```python
item = {
    "name": "healing potion",
    "price": 50,
    "quantity": 3,
    "is_available": True
}

print(item["name"])
print(item["price"])
print(item["quantity"])
print(item["is_available"])
```

Output:

```python
healing potion
50
3
True
```

---

## Exercise 7

```python
game = {
    "title": "Space Battle",
    "price": 60,
    "discount": 15,
    "players_online": 1200,
    "max_players": 2000
}

print(game["price"] - game["discount"])
print(game["max_players"] - game["players_online"])
print(game["players_online"] / 2)
print(f"{game['title']} costs {game['price']} dollars.")
```

Output:

```python
45
800
600.0
Space Battle costs 60 dollars.
```

Key idea:

- `game["price"]` is an `int`
- `game["discount"]` is an `int`
- `game["title"]` is a `str`

So numbers can be used in math, and strings can be used in sentences.

---

## Exercise 8

```python
cart = [
    {"name": "t-shirt", "price": 20, "quantity": 2},
    {"name": "hat", "price": 15, "quantity": 1},
    {"name": "shoes", "price": 50, "quantity": 1}
]

print(cart[0]["name"])
print(cart[1]["price"])
print(cart[0]["quantity"])
print(cart[0]["price"] * cart[0]["quantity"])
print(cart[2]["price"] * cart[2]["quantity"])
```

Output:

```python
t-shirt
15
2
40
50
```

Key idea:

```python
cart[0]
```

gets the first dictionary.

```python
cart[0]["price"]
```

gets the price from the first dictionary.

---

## Exercise 9

```python
temperature = 85

if temperature >= 80:
    print("It is hot")
else:
    print("It is not hot")
```

Output:

```python
It is hot
```

---

## Exercise 10

```python
order = {
    "item": "laptop",
    "price": 900,
    "is_paid": False
}

if order["is_paid"]:
    print("Order complete")
else:
    print("Payment needed")
```

Output:

```python
Payment needed
```

Key idea:

`order["is_paid"]` is already a boolean, so it can be used directly as the condition.

---

## Exercise 11

```python
numbers = [2, 4, 6, 8]

for number in numbers:
    print(number)

for number in numbers:
    print(number * 2)
```

Output from the second loop:

```python
4
8
12
16
```

---

## Exercise 12

```python
pets = [
    {"name": "Bruno", "animal": "dog", "age": 5},
    {"name": "Mittens", "animal": "cat", "age": 3},
    {"name": "Spike", "animal": "lizard", "age": 2}
]

for pet in pets:
    print(pet["name"])

for pet in pets:
    print(f"{pet['name']} is a {pet['animal']}.")

for pet in pets:
    print(pet["age"] * 2)
```

Outputs:

```python
Bruno
Mittens
Spike
```

```python
Bruno is a dog.
Mittens is a cat.
Spike is a lizard.
```

```python
10
6
4
```

---

## Exercise 13

```python
def double_number(number):
    return number * 2

print(double_number(5))
print(double_number(10))
print(double_number(21))
```

Output:

```python
10
20
42
```

---

## Exercise 14

```python
movie = {
    "title": "Robot Dreams",
    "runtime_minutes": 120,
    "rating": 8
}

def get_half_runtime(movie):
    return movie["runtime_minutes"] / 2

print(get_half_runtime(movie))
```

Output:

```python
60.0
```

Key idea:

`movie["runtime_minutes"]` is the number `120`, so the function can divide it by `2`.

---

## Exercise 15A

```python
inventory = [
    {"name": "health potion", "price": 25, "quantity": 4},
    {"name": "mana potion", "price": 30, "quantity": 2},
    {"name": "iron sword", "price": 100, "quantity": 1}
]

print(inventory[0]["price"] * inventory[0]["quantity"])
```

Output:

```python
100
```

---

## Exercise 15B

```python
for item in inventory:
    print(item["name"])
```

Output:

```python
health potion
mana potion
iron sword
```

---

## Exercise 15C

```python
for item in inventory:
    total_value = item["price"] * item["quantity"]
    print(total_value)
```

Output:

```python
100
60
100
```

---

## Exercise 15D

```python
for item in inventory:
    total_value = item["price"] * item["quantity"]
    print(f"{item['name']} has a total value of {total_value}.")
```

Output:

```python
health potion has a total value of 100.
mana potion has a total value of 60.
iron sword has a total value of 100.
```

---

## Exercise 15E

```python
def get_inventory_value(inventory):
    total = 0

    for item in inventory:
        item_total = item["price"] * item["quantity"]
        total = total + item_total

    return total

print(get_inventory_value(inventory))
```

Output:

```python
260
```

Key idea:

Each loop gets one dictionary from the list. From each dictionary, we pull out `price` and `quantity`, multiply them, and add the result to the running total.
