const url = "https://banhidani.github.io/Monolingo/";

describe("template spec", () => {
  it("passes", () => {
    cy.visit(url);
  });
});

describe("nyelv választás", () => {
  it("Angol kiválasztva", () => {
    cy.visit(url);

    cy.contains(".gomb", "Angol").should("be.visible").click();
  });

  it("nyelvek megjelennek-e", () => {
    cy.visit(url);

    cy.contains(".gomb", "Angol").should("be.visible");
    cy.contains(".gomb", "Spanyol").should("be.visible");
    cy.contains(".gomb", "Olasz").should("be.visible");
    cy.contains(".gomb", "Német").should("be.visible");
  });

  it("megjelenik e a megfelelő szöveg", () => {
    cy.visit(url);

    cy.contains("Válassz nyelvet!").should("be.visible");
  });
});

describe("nyelvi szint választás megjelenik", () => {
  it("nyelv választás után átmegy a nyelvi szin kiválasztására", () => {
    cy.visit(url);

    // 2. kattintunk Angolra
    cy.contains(".gomb", "Angol").click();

    // 3. eltűnik a nyelv választó
    cy.contains("Válassz nyelvet!").should("not.exist");

    // 4. megjelenik a szint választó (például)
    cy.contains("Válassz szintet!").should("be.visible");
  });

  
it("Spanyol b1-es szint kiválasztása", () => {
  cy.visit(url);

  // nyelv
  cy.contains(".gomb", "Spanyol").click();

  // szint kiválasztás (példa)
  cy.contains(".szint_gomb", "B1").click();
});

});
