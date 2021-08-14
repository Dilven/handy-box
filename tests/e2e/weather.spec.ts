describe('Weather', () => {
  it('display weather block', () => {
    cy.visit('/')
    cy.contains('Weather')
  })
})