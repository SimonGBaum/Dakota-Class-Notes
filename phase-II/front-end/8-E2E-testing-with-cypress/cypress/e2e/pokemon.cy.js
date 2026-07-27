beforeEach(()=>{
  cy.visit('/')
})

it("should have a heading",()=>{
  cy.get('header').should("be.visible")

})

it("should render the Pikachu Card on load", ()=>{
  // Document.QuerySelectorAll()
  cy.get('#poke-container').children().should('have.length', 1)

})

it("should render Pokemon Card corresponding to the user search",()=>{
  //Interacting with the form
  cy.get("input[id=pokemon-name]").type("Bulbasaur")
  cy.get("button[type=submit]").click()

  // Verify outcome
  cy.get("#poke-container").children().should('have.length',2)
})

it("should render Multiple Pokemon Card corresponding to the user search",()=>{
  //Interacting with the form
  cy.get("input[id=pokemon-name]").type("Bulbasaur")
  cy.get("button[type=submit]").click()
  cy.get("#bulbasaur-card").should("be.visible")

  cy.get("input[id=pokemon-name]").type("Charizard")
  cy.get("button[type=submit]").click()
  cy.get("#charizard-card").should("be.visible")


  // Verify outcome
  cy.get("#poke-container").children().should('have.length',3)
})


it("can toggle shiny pokemon",()=>{
  // generate the card
  cy.get("input[id=pokemon-name]").type("Bulbasaur")
  cy.get("button[type=submit]").click()
  cy.get("#bulbasaur-card").should("be.visible")
  //making it shiny
  cy.get("#bulbasaur-card button").contains("Make Shiny").click()
  cy.get("#bulbasaur-card img").should("have.attr","src").and("include","shiny")
  // make it dull not shiny
  cy.get("#bulbasaur-card button").contains("Make Normal").click()
  cy.get("#bulbasaur-card img").should("have.attr","src").and("not.include","shiny")

})

it("can remove a generated card",()=>{
  cy.get("input[id=pokemon-name]").type("Bulbasaur")
  cy.get("button[type=submit]").click()
  cy.get("#bulbasaur-card").should("be.visible")
  //remove it
  cy.get("#bulbasaur-card button").contains("Remove").click()
  cy.get("#poke-container").children().should('have.length',1)


})

