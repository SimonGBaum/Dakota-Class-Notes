

it("should have a heading",()=>{
  cy.visit('/')
  cy.get('header').should("be.visible")

})