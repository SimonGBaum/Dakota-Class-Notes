# PEDAC Lecture Process Outline

## What We Are Practicing Today

Today we are practicing a repeatable process for solving coding challenge problems.

The goal is not to immediately find the cleverest solution.

The goal is to learn how to move from:

```text
confusing problem statement
```

to:

```text
clear understanding
```

to:

```text
human solution
```

to:

```text
working code
```

to:

```text
tested and improved solution
```

This is the process we will use during the lecture.

---

# Step 1: Understand the Problem, Inputs, Outputs, and Examples

**Time: about 5 minutes**

## 1a. Understand the Problem

First, we read the problem carefully and rewrite it in plain English.

The goal is to answer:

```text
What is this problem asking me to do?
```

We are not coding yet.

We are looking for important details like:

```text
Am I returning values or indexes?

Do I need one answer or multiple answers?

Can there be no answer?

Are there special rules about which answer is correct?
```

For example, in **Sum of Pairs**, we need to notice:

```text
We return values, not indexes.

We return the first valid pair based on the second value's index.

If there is no valid pair, we return None.
```

---

## 1b. Inputs and Outputs

Next, we identify what goes into the function and what should come out.

The goal is to answer:

```text
What data types am I working with?
```

For example:

```text
Input 1: list[int]
Input 2: int target

Output: list[int] or None
```

This matters because a lot of bugs happen when we return the wrong kind of thing.

For example:

```text
Returning indexes when the problem asked for values.

Returning True or False when the problem asked for a list.

Returning the target sum instead of the pair that creates the sum.
```

---

## 1c. Examples and Edge Cases

Then we examine the given test cases and think of tricky cases.

The goal is to answer:

```text
What examples prove I understand the problem?
What cases might break my solution?
```

Common edge cases include:

```text
Duplicate numbers

Negative numbers

Zero

No-answer cases

Multiple valid answers

Very small lists

Answers near the beginning or end
```

Examples help us catch misunderstandings before we write code.

---

# Step 2: Human Algorithm

**Time: about 8 minutes**

Before writing Python, we solve the problem manually.

You can refer to [./how_to_build_algorithms_as_a_human.md](how_to_build_algorithms_as_a_human.md)

The goal is to answer:

```text
How would I solve this with my eyes and brain?
```

This step should sound like plain English, not code.

For example:

```text
Move through the list from left to right.

For each number, figure out what other number would be needed to reach the target.

Check whether we have already seen that needed number.

If we have, return the pair.

If not, remember the current number and keep going.
```

This step is important because code should come from a clear idea.

If the human algorithm is unclear, the code will usually be unclear too.

---

# Step 3: Code Translation, Testing, and Performance Check

**Time: about 10 minutes**

## 3a. First Code Translation

Now we translate the human algorithm into code.

The goal is to answer:

```text
Which parts of my plain-English plan become variables, loops, conditionals, and returns?
```

For example:

```text
"Remember numbers we have seen"
```

might become:

```python
seen = set()
```

```text
"Figure out what number we need"
```

might become:

```python
needed = target - num
```

```text
"Check whether we saw that number before"
```

might become:

```python
if needed in seen:
```

This is where we start turning the plan into Python.

---

## 3b. Test and Revise

Once we have code, we test it with examples.

The goal is to answer:

```text
Does my code actually do what I think it does?
```

We manually trace important values like:

```text
current number

needed number

seen values

return value
```

If the code does not pass an example, we revise it.

Testing is not separate from problem solving.

Testing is how we find out whether our thinking was correct.

---

## 3c. Performance Check

After we have a working idea, we ask whether it is efficient enough.

The goal is to answer:

```text
Will this solution work for the size of input the problem describes?
```

For example, nested loops may be understandable, but they can become too slow for very large lists.

A performance check asks:

```text
Am I doing repeated work?

Am I scanning the same list again and again?

Can I remember useful information instead of recalculating it?
```

This is where we may move from a beginner working solution to a better optimized solution.

---

# Step 4: Refactor, Explain, and Submit

**Time: about 10 minutes**

## 4a. Refactor / Explain

After the code works, we try to improve it.

The goal is to answer:

```text
Can I make this clearer, cleaner, or faster?
```

Refactoring might mean:

```text
Better variable names

Removing repeated code

Using a better data structure

Making the code easier to explain
```

Optimization might mean:

```text
Changing the approach so it performs better
```

Then we explain the final solution in plain English.

If we cannot explain the code, we probably do not fully understand it yet.

---

## 4b. Submit Checklist

Before submitting, we check the solution against the problem requirements.

The goal is to answer:

```text
Am I confident this solves the actual problem?
```

Checklist:

```text
Did I return the correct type?

Did I return values or indexes as requested?

Did I handle duplicates?

Did I handle negative numbers if allowed?

Did I handle None or no-answer cases if required?

Did I test the given examples?

Did I test at least one edge case?

Can I explain why my solution works?

Can I explain why my solution is efficient enough?
```

Only after this do we submit.

---

# Big Picture

The full process is:

```text
1. Understand the problem.
2. Identify inputs and outputs.
3. Examine examples and edge cases.
4. Write a human algorithm.
5. Translate the algorithm into code.
6. Test and revise.
7. Check performance.
8. Refactor and explain.
9. Submit.
```

The main lesson:

```text
Do not rush straight to code.

Good code starts with clear thinking.
```

AI can help review your thinking, test your solution, or explain errors.

But AI should not replace the thinking practice.