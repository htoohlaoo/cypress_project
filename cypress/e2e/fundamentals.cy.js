describe('fundamentals test', () => {
  it('should have correct header text', () => {
    cy.visit('http://localhost:3000/fundamentals');
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals');
  });
  it('Accordions works correctly', () => {
    cy.visit('/fundamentals');
    cy.contains(/Your tests will exist in a describe block/i)
    .should('not.be.visible');
    cy.get('[data-test="accordions-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i)
    .should('be.visible');
    cy.get('[data-test="accordions-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i)
    .should('not.be.visible');
  });
})