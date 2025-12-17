/// <reference types="cypress" />

describe("Menu page", () => {
    it("shows menu items", () => {
        cy.visit("/menu");
        cy.contains("Наше меню").should("be.visible");
        cy.get("img").should("have.length.at.least", 1);
        cy.contains("Додати").should("be.visible");
    });
});
