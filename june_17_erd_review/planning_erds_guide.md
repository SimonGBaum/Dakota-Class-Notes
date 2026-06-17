# Basic ERD and Database Planning Guide

## Big Idea

A database is a way to organize information about the important **things** in an app.

An ERD, or Entity Relationship Diagram, is a map that shows:

- What things we need to store
- What details belong to each thing
- How those things are connected

Before thinking about SQL, think about the real-world story.

For example:

> A school has students. Students take courses. Teachers teach courses.

Or:

> A movie theater shows movies. Customers buy tickets. Staff sell tickets and concessions.

The goal is to turn that story into tables and relationships.

---

## Step 1: Ask “What things do we need to keep track of?”

Start by listing the major nouns in the problem.

For a school, that might be:

- School
- Student
- Course
- Teacher
- Enrollment

For a movie theater, that might be:

- Movie
- Theater / Screen
- Showtime
- Customer
- Ticket
- Staff
- Concession Item
- Concession Sale

These major things usually become **tables**.

A good question to ask is:

> Is this thing important enough that we need to store information about it?

If yes, it may need to be a table.

---

## Step 2: Ask “What details belong to each thing?”

Once you have your tables, ask what information belongs inside each table.

For example, a `student` might have:

- Name
- Email
- Grade level

A `movie` might have:

- Title
- Rating
- Runtime
- Genre

A `theater` might have:

- Screen number
- Seat capacity
- Sound type
- Seating type

These details become **columns**.

Try to keep each table focused on one thing.

For example, do not put movie title directly on a ticket if you already have a `movies` table. The ticket should connect to the movie through the correct relationship.

---

## Step 3: Ask “How are these things connected?”

This is where relationships come in.

The three main relationship types are:

1. One-to-one
2. One-to-many
3. Many-to-many

---

## One-to-One

One thing connects to exactly one other thing.

Example:

> One person has one passport.

This is less common than the others.

Basic idea:

```text
Person 1 ---- 1 Passport
```

Ask:

> Does each item on both sides only connect to one item on the other side?

If yes, it may be one-to-one.

---

## One-to-Many

One thing can have many of another thing.

Example:

> One school has many students.

```text
School 1 ---- many Students
```

Another example:

> One movie has many showtimes.

```text
Movie 1 ---- many Showtimes
```

Ask:

> Can one of these have multiple of the other?

If yes, it may be one-to-many.

The “many” side usually stores the connection back to the “one” side.

Example:

```text
students table has school_id
```

That means each student belongs to one school.

---

## Many-to-Many

Many-to-many means both sides can have many of the other.

Example:

> A student can take many courses.
> A course can have many students.

```text
Students many ---- many Courses
```

This usually needs a middle table.

```text
Students 1 ---- many Enrollments many ---- 1 Courses
```

The middle table explains the connection.

In this case, the middle table is `enrollments`.

An enrollment means:

> This student is taking this course.

---

## Why Many-to-Many Needs a Middle Table

Many-to-many relationships are hard to store directly.

Instead of trying to connect students directly to courses, we create a new table that represents the relationship.

Example:

```text
students
courses
enrollments
```

The `enrollments` table connects one student to one course.

It may also store details about that relationship, like:

- Enrollment date
- Grade
- Status

This is the key idea:

> If the relationship itself has information, it probably deserves its own table.

---

## Movie Theater Example: Movies and Theaters

At first, you might think:

```text
Movies many ---- many Theaters
```

A movie can be shown in many theaters.

A theater can show many movies over time.

But the real question is more specific:

> What movie is playing in what theater at what time?

So we add a middle table:

```text
Movies 1 ---- many Showtimes many ---- 1 Theaters
```

The `showtimes` table connects:

- One movie
- One theater/screen
- One date and time

This is better because the showtime is the actual event.

---

## Movie Theater Example: Concessions

A concession sale can include many items.

For example:

- Popcorn
- Soda
- Candy

The same concession item can appear in many different sales.

So this is many-to-many:

```text
Concession Sales many ---- many Concession Items
```

We solve it with a middle table:

```text
Concession Sales 1 ---- many Concession Sale Items many ---- 1 Concession Items
```

The middle table can store:

- Quantity
- Item price at the time of sale

That matters because one sale might include 2 sodas and 1 popcorn.

---

## Step 4: Ask “What actions happen in this system?”

Actions often reveal missing tables.

Examples:

### School

Students do not just “have” courses.

Students **enroll in** courses.

So we may need an `enrollments` table.

### Movie Theater

Customers do not just “have” movies.

Customers **buy tickets** for showtimes.

So we need a `tickets` table.

Staff do not just “have” concessions.

Staff **sell concession items** in a concession sale.

So we need `concession_sales` and `concession_sale_items`.

Good question:

> Is there an event, action, or transaction we need to remember?

If yes, that action may need its own table.

---

## Step 5: Keep asking “One or many?”

For every relationship, ask the question in both directions.

Example:

> Can one customer have many tickets?

Yes.

> Can one ticket belong to many customers?

Usually no.

So that is:

```text
Customer 1 ---- many Tickets
```

Another example:

> Can one movie have many showtimes?

Yes.

> Can one showtime have many movies?

No. One showtime is for one movie.

So that is:

```text
Movie 1 ---- many Showtimes
```

Another example:

> Can one concession sale have many concession items?

Yes.

> Can one concession item appear in many concession sales?

Yes.

So that is many-to-many, and we need a middle table.

---

## Simple ERD Planning Checklist

Use this checklist when designing an ERD:

1. What is the app or system about?
2. What major things do we need to store?
3. What details belong to each thing?
4. Which things are connected?
5. Is each connection one-to-one, one-to-many, or many-to-many?
6. Do any many-to-many relationships need a middle table?
7. Are there actions or transactions that need their own table?
8. Does each table focus on one main idea?
9. Can we explain the whole database in plain English?

---

## Common Beginner Mistakes

### Mistake 1: Putting too much information in one table

Bad idea:

```text
Ticket table has customer name, movie title, theater number, staff name, popcorn order, soda order
```

This mixes too many ideas together.

Better idea:

- Customers go in `customers`
- Movies go in `movies`
- Theaters go in `theaters`
- Tickets go in `tickets`
- Concession sales go in `concession_sales`

Each table should have one main purpose.

---

### Mistake 2: Missing the middle table

If both sides can have many of each other, do not force it into one table.

Use a middle table.

Examples:

```text
Students many ---- many Courses
```

Becomes:

```text
Students 1 ---- many Enrollments many ---- 1 Courses
```

```text
Movies many ---- many Theaters
```

Becomes:

```text
Movies 1 ---- many Showtimes many ---- 1 Theaters
```

---

### Mistake 3: Confusing a thing with an event

A `movie` is a thing.

A `showtime` is an event.

A `customer` is a thing.

A `ticket purchase` is an event.

A `concession item` is a thing.

A `concession sale` is an event.

Events often become tables because we need to remember that they happened.

---

## Plain English Test

After making your ERD, explain it out loud.

For example:

> A movie has many showtimes.
> A theater has many showtimes.
> A customer buys tickets.
> Each ticket is for one showtime.
> Staff handle ticket sales and concession sales.
> A concession sale can include many concession items.

If the explanation makes sense in plain English, your ERD is probably on the right track.

If the explanation sounds weird, the design may need to change.

---

## Main Takeaway

Do not start with code.

Start with the story.

Ask:

> What things exist?
> What details do we need about them?
> How are they connected?
> Is this one-to-many or many-to-many?
> Do we need a middle table?

That is the basic thinking behind ERDs.