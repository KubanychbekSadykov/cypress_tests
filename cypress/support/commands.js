Cypress.Commands.add('login', () => {
  cy.fixture('example.json').then((example) => {
    cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
      auth: {
        username: example.username,
        password: example.password
      }
    });
	cy.get('input[type="email"]').type(example.email);
    cy.get('input[type="password"]').type(example.email_password);
    cy.get('button[type="submit"]').click();
  });
});