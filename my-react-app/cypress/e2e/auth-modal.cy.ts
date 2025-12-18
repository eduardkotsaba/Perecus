/// <reference types="cypress" />

describe("Auth modal", () => {
    it("opens and closes auth modal", () => {
        cy.visit("/");
        cy.contains("Авторизація").click();
        cy.contains("Вхід").should("be.visible");

        cy.contains("Закрити").click();
        cy.contains("Вхід").should("not.exist");
    });
});
