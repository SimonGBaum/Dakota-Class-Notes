# Movie Theater ERD Requirements

### Design an ERD for a movie theater database.

#### The database should track:

##### Movies
- A movie has a title, rating, runtime, and genre.
- A movie can be shown in multiple theaters/screens.

##### Theaters / Screens
- Each theater/screen has a screen number, seat capacity, and features.
- Example features: stadium seating, THX sound, IMAX, recliners.
- A theater/screen can show many movies over time.

##### Showtimes
- A showtime connects a movie to a specific theater/screen.
- A showtime has a date and time.
- This is how we know which movie is playing in which theater at what time.

##### Customers
- Customers can buy tickets.
- A customer may buy many tickets.

##### Tickets
- A ticket belongs to one customer.
- A ticket is for one showtime.
- A ticket has a seat number and price.
- Tickets connect people to the movie/theater/showtime they are attending.

##### Staff
- Staff members work at the movie theater.
- Staff can work at the box office, concessions, or both.
- Staff can be associated with ticket sales and concession sales.

##### Box Office Sales
- The box office sells tickets.
- Each box office sale is handled by one staff member.
- A box office sale can include one or more tickets.

##### Concession Items
- Track items sold at concessions.
- Example items: popcorn, soda, candy, nachos.

##### Concession Sales
- A concession sale is handled by one staff member.
- A concession sale can include multiple concession items.
- The database should track quantity and price for each item sold.