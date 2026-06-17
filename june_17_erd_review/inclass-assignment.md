# Movie Theater ERD Challenge

Design an ERD for a movie theater database.

Your database should help the theater keep track of movies, screens, tickets, customers, staff, and concession sales.

## Requirements

The theater has multiple screens/theaters.

Each screen/theater should store basic information such as:

- screen number
- number of seats
- special features, such as IMAX, THX sound, stadium seating, or recliners

The theater shows many movies.

Each movie should store basic information such as:

- title
- rating
- runtime
- genre

A movie may be shown on more than one screen/theater.

A screen/theater may show different movies at different times.

The theater needs to know when and where each movie is being shown.

Customers can buy tickets.

A ticket should connect a customer to the movie showing they are attending.

Tickets should track information such as:

- seat number
- price

Staff members work at the theater.

Some staff may sell tickets.

Some staff may sell concessions.

Some staff may do both.

The theater wants to track ticket sales and which staff member handled the sale.

The theater also wants to track concession sales.

Concession items include things like:

- popcorn
- soda
- candy
- nachos

A concession sale may include more than one item.

The theater should be able to track:

- which items were sold
- how many of each item were sold
- the price of each item at the time of sale
- which staff member handled the sale

## Your Goal

Create an ERD that shows:

- the main tables/entities
- the relationships between those tables
- which relationships are one-to-many
- which relationships might be many-to-many
- where a join table or middle table may be needed

## Questions To Think About

Ask yourself:

1. What are the main things this app needs to remember?
2. Which things should become tables?
3. Can one of this thing connect to many of that thing?
4. Can many of this thing connect to many of that thing?
5. Do we need a middle table to describe the connection?
6. Is there extra information about the relationship itself?

For example:

- If a movie can be shown in many screens, and a screen can show many movies over time, what table helps explain *which movie, which screen, and what time*?
- If one concession sale can include many items, and the same item can appear in many sales, what table helps track the quantity and price of each item sold?
- If one customer buys multiple tickets at once, how might you track the full sale?