/// <reference types="cypress" />

describe("Navigation", () => {
    it("opens Menu page", () => {
        cy.visit("/");
        cy.contains("Меню").click();
        cy.url().should("include", "/menu");
        cy.contains("Наше меню").should("be.visible");
    });

    it("opens Delivery page", () => {
        cy.visit("/");
        cy.contains("Доставка").click();
        cy.url().should("include", "/delivery");
        cy.contains("Доставка").should("be.visible");
    });
});
