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
})