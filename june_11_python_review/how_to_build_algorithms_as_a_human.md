# How to Build a Human Algorithm Before Coding

## What Is a Human Algorithm?

A human algorithm is a plain-English plan for solving a problem before writing code.

It should explain what a person would do with paper, a pencil, and their brain.

The goal is to move from:

```text
I kind of understand the problem
```

to:

```text
I know the steps I want the computer to follow
```

before worrying about Python syntax.

---

## Why This Matters

Beginners often try to jump directly from the problem statement to code.

That usually causes problems like:

```text
I do not know what loop to write.

I do not know what variables I need.

I do not know when to return.

I do not know why my code works or does not work.
```

A human algorithm helps because it gives your code a job to translate.

Good code usually starts as clear human instructions.

---

# The Big Question

When you are stuck, do not ask:

```text
How do I code this?
```

Ask:

```text
How would I solve this manually?
```

Pretend Python does not exist yet.

Pretend you have:

```text
a small example

a pencil

some scratch paper

your eyes

your brain
```

That is enough to begin.

---

# Human Algorithm Builder

Use these questions whenever you are solving a coding challenge.

---

## 1. What am I trying to find?

Start by naming the goal.

Ask:

```text
What is the answer supposed to be?
```

Examples:

```text
I am trying to find the largest number.

I am trying to count how many times something happens.

I am trying to find two things that match a rule.

I am trying to build a new string.

I am trying to return True or False.

I am trying to return a list of results.
```

This helps you avoid solving the wrong problem.

---

## 2. What information do I start with?

Identify the input.

Ask:

```text
What data do I receive?
```

Examples:

```text
A list of numbers.

A string.

Two numbers.

A list of words.

A dictionary.

A target value.
```

Then ask:

```text
What type of thing is this?
```

Examples:

```text
list

string

integer

boolean

dictionary
```

The type matters because it changes what you can do.

For example:

```text
A list can be looped through.

A string can be looped through character by character.

A dictionary can connect keys to values.

A number can be compared or used in math.
```

---

## 3. What should I return?

Before solving, identify the output.

Ask:

```text
What should my function give back?
```

Examples:

```text
A number.

A string.

A list.

A boolean.

None.

A tuple.

A dictionary.
```

This helps prevent a very common mistake:

```text
Returning the right idea in the wrong format.
```

For example, a problem might ask for:

```text
the index of the largest value
```

not:

```text
the largest value itself
```

Those are different answers.

---

## 4. Can I solve a tiny example by hand?

Pick a small example and solve it manually.

Do not code yet.

Example problem:

```text
Given a list of numbers, return the largest number.
```

Tiny example:

```python
[4, 9, 2]
```

Manual thinking:

```text
Start with 4.

Compare 9 to 4.
9 is bigger, so remember 9.

Compare 2 to 9.
2 is not bigger, so keep remembering 9.

Return 9.
```

This manual process is the beginning of the algorithm.

---

## 5. What changes as I move through the example?

Most algorithms involve moving through data and updating something.

Ask:

```text
What value changes while I work?
```

In the largest-number example:

```text
The number I am currently looking at changes.

The largest number I have seen so far might change.
```

That gives us two important code ideas:

```text
current number

largest so far
```

Those can become variables later.

---

## 6. What do I need to remember?

This is one of the most important questions.

Ask:

```text
What information from earlier do I need later?
```

Examples:

```text
I need to remember the largest value so far.

I need to remember numbers I have already seen.

I need to remember how many times each item appeared.

I need to remember the current total.

I need to remember the result I am building.
```

What you need to remember often tells you what kind of variable or data structure you need.

Examples:

```text
Remember one number -> variable

Remember a growing list of answers -> list

Remember whether values appeared before -> set

Remember counts -> dictionary

Remember text you are building -> string
```

You do not need to know the perfect data structure immediately.

First, just say what needs to be remembered.

---

## 7. What do I repeat?

Most coding challenge problems involve repetition.

Ask:

```text
What am I doing again and again?
```

Examples:

```text
Look at each number.

Look at each character.

Compare each item to another item.

Count each item.

Add each valid result to a list.

Build the answer one piece at a time.
```

This usually becomes a loop.

In plain English:

```text
For each number in the list...
```

In Python, that might become:

```python
for number in numbers:
    ...
```

---

## 8. What decision do I make each time?

Inside the repeated action, there is usually a question.

Ask:

```text
What am I checking?
```

Examples:

```text
Is this number bigger than the largest so far?

Is this character a space?

Have I seen this value before?

Is this count odd?

Does this pair add to the target?

Should this item be included in the result?
```

This usually becomes an `if` statement.

In plain English:

```text
If this number is bigger than the largest so far, remember it.
```

In Python, that might become:

```python
if number > largest:
    largest = number
```

---

## 9. When do I stop?

Ask:

```text
When is the problem finished?
```

Sometimes you stop when the loop ends.

Example:

```text
After checking every number, return the largest number found.
```

Sometimes you stop early.

Example:

```text
As soon as I find a matching pair, return it.
```

This helps you place your `return`.

Common stopping points:

```text
After checking everything.

As soon as I find the first valid answer.

After I build the full result.

After I find a value that proves the answer is True or False.
```

---

## 10. What do I return?

Finally, say exactly what gets returned.

Ask:

```text
What is the final answer?
```

Examples:

```text
Return the largest number.

Return the count.

Return the list of matches.

Return True.

Return None.

Return the built string.
```

Be specific.

Bad:

```text
Return the answer.
```

Better:

```text
Return the largest number we remembered.
```

Better:

```text
Return the list of words that passed the condition.
```

Better:

```text
Return None if no match was found.
```

---

# Turning a Human Algorithm Into Code

Once you have a human algorithm, code translation becomes easier.

Look for these patterns.

---

## Pattern 1: "Go through each item"

Plain English:

```text
Go through each number in the list.
```

Python:

```python
for number in numbers:
    ...
```

---

## Pattern 2: "Remember something"

Plain English:

```text
Remember the largest number seen so far.
```

Python:

```python
largest = numbers[0]
```

Plain English:

```text
Remember values we have already seen.
```

Python:

```python
seen = set()
```

Plain English:

```text
Remember how many times each value appears.
```

Python:

```python
counts = {}
```

---

## Pattern 3: "Ask a question"

Plain English:

```text
If this number is bigger than the largest so far...
```

Python:

```python
if number > largest:
    ...
```

Plain English:

```text
If this item is allowed...
```

Python:

```python
if condition:
    ...
```

---

## Pattern 4: "Update what I remember"

Plain English:

```text
Remember this as the new largest number.
```

Python:

```python
largest = number
```

Plain English:

```text
Add this item to the result list.
```

Python:

```python
result.append(item)
```

Plain English:

```text
Increase this count by one.
```

Python:

```python
counts[item] += 1
```

---

## Pattern 5: "Give back the answer"

Plain English:

```text
Return the largest number found.
```

Python:

```python
return largest
```

Plain English:

```text
Return None if no answer was found.
```

Python:

```python
return None
```

---

# Example Walkthrough

## Problem

```text
Write a function that returns the largest number in a list.
```

Example:

```python
largest_number([4, 9, 2])
# returns 9
```

---

## Step 1: What am I trying to find?

```text
I am trying to find the biggest number in the list.
```

---

## Step 2: What information do I start with?

```text
Input: a list of numbers
```

Example:

```python
[4, 9, 2]
```

---

## Step 3: What should I return?

```text
Output: one number
```

Example:

```python
9
```

---

## Step 4: Solve by hand

```text
Start with 4 as the largest number so far.

Look at 9.
9 is bigger than 4.
Now 9 is the largest number so far.

Look at 2.
2 is not bigger than 9.
Keep 9 as the largest number so far.

Return 9.
```

---

## Step 5: What do I need to remember?

```text
I need to remember the largest number seen so far.
```

Possible variable:

```python
largest = numbers[0]
```

---

## Step 6: What do I repeat?

```text
I look at each number in the list.
```

Possible code:

```python
for number in numbers:
    ...
```

---

## Step 7: What decision do I make?

```text
If the current number is bigger than the largest number so far, update largest.
```

Possible code:

```python
if number > largest:
    largest = number
```

---

## Step 8: When do I stop?

```text
After I have checked every number.
```

---

## Step 9: What do I return?

```text
Return the largest number seen.
```

Possible code:

```python
return largest
```

---

## Full Human Algorithm

```text
Start by assuming the first number is the largest.

Go through each number in the list.

If the current number is bigger than the largest number remembered, update the largest number.

After checking all numbers, return the largest number remembered.
```

---

## Code Translation

```python
def largest_number(numbers):
    largest = numbers[0]

    for number in numbers:
        if number > largest:
            largest = number

    return largest
```

---

# How to Know If Your Human Algorithm Is Specific Enough

A weak human algorithm is vague.

Weak example:

```text
Loop through the list and find the answer.
```

This is not enough.

It does not say:

```text
What are we looking for?

What are we remembering?

What are we checking?

When do we stop?

What do we return?
```

A stronger human algorithm is specific.

Strong example:

```text
Start by remembering the first number as the largest.

Go through each number in the list.

For each number, check whether it is bigger than the largest number remembered.

If it is bigger, replace the remembered largest number with the current number.

After checking the whole list, return the largest number remembered.
```

That is specific enough to turn into code.

---

# Human Algorithm Checklist

Before writing code, ask:

```text
Can I solve a tiny example by hand?

Did I identify what I am looking for?

Did I identify what I need to remember?

Did I identify what repeats?

Did I identify what decision I make each time?

Did I identify when to stop?

Did I identify exactly what to return?
```

If the answer is yes, you are ready to translate to code.

---

# Common Problem Patterns

Many beginner coding problems fit into one of these patterns.

---

## Searching

Goal:

```text
Find one thing.
```

Human algorithm usually sounds like:

```text
Go through each item.

If this item matches the rule, return it.
```

Common code tools:

```text
loop

if statement

return
```

---

## Counting

Goal:

```text
Count how many times something happens.
```

Human algorithm usually sounds like:

```text
Start a count at 0.

Go through each item.

If the item matches the rule, increase the count.

Return the count.
```

Common code tools:

```text
counter variable

loop

if statement
```

---

## Building

Goal:

```text
Create a new string or list.
```

Human algorithm usually sounds like:

```text
Start with an empty result.

Go through each item.

If the item should be included, add it to the result.

Return the result.
```

Common code tools:

```text
empty string

empty list

loop

append or string concatenation

return
```

---

## Comparing

Goal:

```text
Find the biggest, smallest, best, first, or most important value.
```

Human algorithm usually sounds like:

```text
Start by remembering one candidate.

Go through the rest.

If the current item is better than the remembered candidate, replace it.

Return the remembered candidate.
```

Common code tools:

```text
tracking variable

loop

comparison

return
```

---

## Remembering Previous Items

Goal:

```text
Use something from earlier in the list to solve something later.
```

Human algorithm usually sounds like:

```text
Start with an empty memory.

Go through the list.

For each item, check whether something useful is already in memory.

If it is, use it.

If not, add the current item to memory.
```

Common code tools:

```text
set

dictionary

loop

if statement
```

---

# Final Reminder

Do not start by asking:

```text
What code do I write?
```

Start by asking:

```text
What would I do by hand?
```

Then write those steps clearly enough that another human could follow them.

Once another human could follow your steps, Python probably can too.