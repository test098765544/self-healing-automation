Cypress.Commands.add("ensureLoggedIn", () => {

  cy.get("body").then(($body) => {

    if ($body.find("#username").length > 0) {

      cy.log("Session expired → Re-login");

      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      cy.get("button[type='submit']").click();
    }
  });
});