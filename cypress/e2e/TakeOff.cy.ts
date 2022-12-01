import { slowCypressDown } from 'cypress-slow-down'
// registers the cy.slowDown and cy.slowDownEnd commands
import 'cypress-slow-down/commands'
// must enable the plugin using slowCypressDown
// can disable the slow down by default or use some default delay
slowCypressDown(false)

describe("Testing web site connectivity", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Checks if values are not set", () => {
    cy.get(".textField input").should("have.value", "");
  });

  it("Checks there is no result", () => {
    cy.contains("Aucune données saisie").should("exist");
  });
});

describe("Testing data entering", () => {
  it("Entering data", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input[id='Cap de la piste']").type("270").should("have.value", "270");
    cy.get("input[id='Direction du vent']").type("270").should("have.value", "270");
    cy.get("input[id='Force du vent']").type("0").should("have.value", "0");
  });



  it("Checks 'Aucune données saisie' doesn't exist in the ", () => {
    cy.contains("Aucune données saisie").should("not.exist");
  });

  it("Checks Head Wind exists in results", () => {
    cy.contains("Head Wind").should("exist");
    cy.contains("Good to go").should("exist");
  });
});

describe("Testing data entering 2: tail wind avec décollage possible", () => {
  it("Entering data", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input[id='Cap de la piste']").type("090").should("have.value", "090");
    cy.get("input[id='Direction du vent']").type("270").should("have.value", "270");
    cy.get("input[id='Force du vent']").type("0").should("have.value", "0");
  });



  it("Checks 'Aucune données saisie' doesn't exist in the ", () => {
    cy.contains("Aucune données saisie").should("not.exist");
  });

  it("Checks Tail Wind exists in results", () => {
    cy.contains("Tail Wind").should("exist");
    cy.contains("Good to go").should("exist");
  });
});

describe("Testing data entering 2: tail wind avec décollage impossible", () => {
  it("Entering data", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input[id='Force du vent']").type("11").should("have.value", "11");
    cy.get("input[id='Cap de la piste']").type("090").should("have.value", "090");
    cy.get("input[id='Direction du vent']").type("270").should("have.value", "270").slowDown(1000);
    //slowDown ajouté pour ralentir le déroulement du test E2E sur le dernier test
  });



  it("Checks 'Aucune données saisie' doesn't exist in the ", () => {
    cy.contains("Aucune données saisie").should("not.exist");
  });

  it("Checks Tail Wind exists in results", () => {
    cy.contains("Good to go").should("not.exist");
    cy.contains("Tail Wind").should("exist");
  });
});


