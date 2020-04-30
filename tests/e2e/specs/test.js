// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "Etiquetas");
  });
});


describe("Create tag", () => {
  it("Typing and clean after of save", () => {
    cy.get(".create__input").should("have.value", "");
    cy.get(".create__input").type("Calculado{enter}");
    cy.get(".create__input").should("have.value", "");

    cy.get(".create__input").type("Calculado 2");
    cy.get(".create__action").click();
    cy.get(".create__input").should("have.value", "");
  });

  it("Create empty tag should show error message", () => {
    cy.get(".create__input").should("have.value", "");
    cy.get(".create__input").type("{enter}");
    cy.contains(".create span.error_msg", "El campo no puede estar vacío")
  });

  it("Validate two tags created", () => {
    cy.contains(":nth-child(1) > .item__title", "Calculado 2");
    cy.contains(":nth-child(2) > .item__title", "Calculado");
  })
});


describe("Update tag", () => {
  it("Should change tag UI", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(1)").click();

    cy.get("ul > :nth-child(1) .item__edit--wrapper input").should("have.value", "Calculado 2");
    cy.contains(":nth-child(1) > .actions > :nth-child(1)", "Guardar");
    cy.contains(":nth-child(1) > .actions > :nth-child(2)", "Cancelar");
  });

  it("Should keep equal if select Cancelar", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(2)").click();
    cy.contains(":nth-child(1) > .item__title", "Calculado 2");
  });

  it("Update first tag", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(1)").click();
    cy.get("ul > :nth-child(1) .item__edit--wrapper input").clear().type("It'll be deleted");
    cy.get(":nth-child(1) > .actions > :nth-child(1)").click();
    cy.contains(":nth-child(1) > .item__title", "It'll be deleted");
  });

});


describe("Delete tag", () => {
  it("Should change tag UI", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(2)").click();

    cy.contains(":nth-child(1) > .item__title", "⚠️ ¿Quieres eliminar la etiqueta It'll be deleted?")
    cy.contains(":nth-child(1) > .actions > :nth-child(1)", "¡Si, seguro!");
    cy.contains(":nth-child(1) > .actions > :nth-child(2)", "Cancelar");
  });

  it("Should keep equal if select Cancelar", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(2)").click();
    cy.contains(":nth-child(1) > .item__title", "It'll be deleted");
  });

  it("Delete first tag", () => {
    cy.get(":nth-child(1) > .actions > :nth-child(2)").click();
    cy.get(":nth-child(1) > .actions > :nth-child(1)").click();
    cy.contains(":nth-child(1) > .item__title", "Calculado");
  });

});