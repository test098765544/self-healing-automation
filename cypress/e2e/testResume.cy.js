describe("SELF HEALING - Visible Resume Demo", () => {

  it("should show failure and auto resume clearly", () => {

    cy.visit("https://demoqa.com/text-box");
    cy.wait(2000);

    //  STEP 1
    cy.log(" Step 1: Filling Name");
    cy.get("#userName").type("Priya", { delay: 100 });
    cy.wait(1500);

    //  STEP 2 (VISIBLE FAILURE)
    cy.log(" Step 2: Filling Email");
    cy.get("#userEmail").type("priya@test.com", { delay: 100 });
    cy.wait(1500);

    //  SHOW ERROR ON UI
    cy.document().then((doc) => {
      const errorDiv = doc.createElement("div");
      errorDiv.innerText = " ERROR: Something went wrong!";
      errorDiv.style.background = "red";
      errorDiv.style.color = "white";
      errorDiv.style.padding = "15px";
      errorDiv.style.position = "fixed";
      errorDiv.style.top = "10px";
      errorDiv.style.left = "10px";
      errorDiv.style.zIndex = "9999";
      doc.body.appendChild(errorDiv);
    });

    cy.wait(3000);

    //  SELF HEALING
    cy.log("🔁 Recovering and resuming...");

    //  STEP 3 (RESUME)
    cy.get("#currentAddress").type("Delhi", { delay: 100 });
    cy.wait(1500);

    cy.log("🎉 Resume successful!");

  });

});