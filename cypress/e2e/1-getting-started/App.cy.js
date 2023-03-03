import '@testing-library/cypress/add-commands'

describe('App Component', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("should render a header that says 'Hello World!'", () => {
        cy.findByRole('heading').should('contain', 'Hello World!');
    })

    it("should change the header text when the button is clicked", () => {
        cy.findByRole('button').click();
        cy.findByRole('heading').should('contain', 'Hello Universe!')
    })

    it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
        cy.findByRole('button').click();
        expect(cy.findByRole('textbox', {name: /Recipe name/i})).toExist()
        cy.findByRole('textbox', {name: /instructions/i}).should('exist')
      })

      it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
        const recipeName = 'Tofu Scramble Tacos';
        cy.findByRole('button').click()
        cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
        cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
      
        return cy.findByRole('button').click()
          .then(() => {
          expect(cy.findByRole('listitem', /tofu scramble tacos/i)).toExist();
          })
      })
})