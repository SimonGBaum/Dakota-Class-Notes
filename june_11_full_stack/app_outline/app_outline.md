# App Planning Outline

## Fundamental Questions

### Identifying the App

1. What problem does the App solve? - Will facilitate the users ability to manage tasks in a quick and effective fashion.

2. Why would someone use it? - This build for people who are tired of the traditional task managing apps that have so many features that it's made the application hard to navigate and/or use

3. What pain point exists today? - Apps are now hard to utilize and aren't transparent for individuals accustomed to older models. We need simplicity!

4. How are users solving this now? - Trello, post-it notes, google calendar, google tasks

### Who is the User

1. Who will use this app? - Everyone and Anyone

2. There is not any additional users

3. What information does this user need?

    a. manage a resource <tasks>
    b. personal information: email, password, name, etc.

### User Goals

1. What actions do people come here to accomplish? - Manage their tasks and maintain a efficient work/life style

2. Top 3 reasons for visit? 

    a. Complete a task - UPDATE | PUT
    b. create a task - CREATE | POST
    c. update a task - UPDATE | PUT

#### Information Needed

1. What do users view? - They are likely to view the following resources:

    a. profiles
    b. tasks

2. What should they never see? - Other users profiles and tasks

3. What do they create/update/delete? - tasks

## User Journey

User should visit my application and be immediately face with a form that will handle BOTH registration and log in. This form should be exchangeable pending on whether the user indicates if they have an existing account or don't.

If a user is registering they should confirm their email and their password prior to a successful registration.

After filling out the form they will either register and/or log in and be sent to the home page where they will see a few paragraphs describing the purpose and intent of this application.

Users may visit a page named all tasks where all tasks sorted by the date they were created will be on display. Additionally there will be a simple input form for creating a new task.
If a user completes a task they can check a checkbox demonstrating completion and vise versa to demonstrate a task is still pending. They can click on a pencil icon to quickly edit a task, click on a trash icon to delete a task.

deleting a task will always require user confirmation.

User may click on the task itself to open a pop up that will show the selected task in detail. task name, date created, description, completion. Pop up should have an interface with capabilities for saving, deleting, completing a task.

A user may visit pending tasks where only pending tasks will be displayed sorted by date created

A user may visit completed tasks where only completed tasks will be displayed sorted by date created

A user may visit Contact Us where they will have the ability to reach out for support via email, phone, github, linked in

If something goes wrong a page stating "OOps something went wrong, we have captured this error and will work diligently on fixing it!" with a button named "Home" that will redirect the user back to the home page.

Upon a task being completed a daily counter increments to show the user how many tasks they've completed today.

User logs out.

