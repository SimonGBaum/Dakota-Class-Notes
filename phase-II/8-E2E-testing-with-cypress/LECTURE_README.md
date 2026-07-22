# Intro to E2E Testing

## Part I: Cypress & React

- Why to test?
- Types of tests
  - unit < Integration < E2E
- why cypress
- installing cypress
- writing and executing your first test


## Part II: Cypress Assertionsgit a

- When to test
- Analyzing features
- Testing each Feature
  - PokemonCard
    - Create and View a Pokemon Card
      - by interacting with a form
      - write input (pokemon name)
      - by pressing the submit button or pressing "enter" on their keyboard to submit the form
    - Update each pokemon card to demonstrate a shiny || !shiny
      - upon a card rendering
      - a button within the card named 'shiny' is rendered
      - the user can click said button
      - update the shiny image from shiny to !shiny and viseversa 
    - Remove a card from the display
      - upon a card rendering
      - a button within the card named 'remove' is rendered
      - the user can click said button
      - remove the card from the display and the browser
    - Redirect to pokemon details for viewer
      - upon card rendering
      - a button within the card named 'details' is rendered
      - upon the user clicking on said button the user will navigate to a page where all details of the pokemon corresponding to the card are displayed
  


  - Navigation
    - / => home
    - /about => About Page
    - /pokemon/:id => Pokemon Details
    - \* => 404 Not Found Page
