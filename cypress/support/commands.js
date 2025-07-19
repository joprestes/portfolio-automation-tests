Cypress.Commands.add('visitAndCheck', () => {
  cy.visit('/');
  cy.title().should('contain', 'Joelma Ferreira'); // Verificação de estabilidade
});