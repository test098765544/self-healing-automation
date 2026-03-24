describe("SELF HEALING - Visible Session Expiry", () => {

  const login = () => {
    cy.get("#username").clear().type("tomsmith", { delay: 100 });
    cy.get("#password").clear().type("SuperSecretPassword!", { delay: 100 });
    cy.get("button[type='submit']").click();
  };

  it("should show session expiry and auto recovery", () => {

    //  STEP 1: Login
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.log("🚀 Logging in...");
    login();

    cy.contains("You logged into a secure area!");
    cy.wait(2000);

    //  STEP 2: Force logout (VISIBLE)
    cy.log("⚠️ Simulating session expiry...");
    cy.get(".icon-signout").click(); // logout button
    cy.wait(2000);

    // Verify logout message
    cy.contains("You logged out of the secure area!");
    cy.wait(2000);

    // Try accessing secure page again
    cy.visit("https://the-internet.herokuapp.com/secure");
    cy.wait(2000);

    //  SELF-HEALING LOGIC
    cy.get("body").then(($body) => {

      if ($body.text().includes("You must login")) {

        cy.log(" Session expired → Auto healing triggered");

        // 🔁 AUTO LOGIN
        login();
        cy.wait(2000);
      }

    });

    // 🟢 FINAL VERIFY
    cy.contains("You logged into a secure area!");
    cy.log("🎉 Session recovered successfully!");

  });

});