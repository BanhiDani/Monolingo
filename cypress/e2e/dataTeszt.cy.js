/*describe('Teszt', () => {
  it('Oldal megjelenik', () => {
    cy.visit('https://banhidani.github.io/Monolingo/')
  })
})

describe('Nyelv gomb megnyomható', () => {
it("Nyelv gomb megnyomható", () => {
    cy.visit('https://banhidani.github.io/Monolingo/')
    cy.contains(".gomb", "Angol").should("be.visible").click();
    })
})
describe('Szint gomb megnyomható', () => {
it("Szint gomb megnyomható", () => {
    cy.visit('https://banhidani.github.io/Monolingo/')
    cy.contains(".gomb", "Angol").should("be.visible").click();
    cy.contains(".szint_gomb", "A1").should("be.visible");
  })
})*/


describe("Nyelv és szint továbbítása a chat POST kérésben", () => {
  beforeEach(() => {
    cy.intercept("POST", "/api/chat", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          reply: "Mock AI válasz"
        }
      });
    }).as("chatRequest");
    cy.visit("https://banhidani.github.io/Monolingo/");
  });

  it("Nyelv és szint szerepel a POST body-ban", () => {
    cy.contains(".gomb", "Angol").click();
    cy.contains(".szint_gomb", "A1").click();
    cy.get("#uzenetKuld").type("Teszt üzenet");
    cy.get("#kuld").click();
    cy.wait("@chatRequest").then((interception) => {
      expect(interception.request.body).to.have.property("language", "Angol");
      expect(interception.request.body).to.have.property("level", "A1");
    });
  });

});

