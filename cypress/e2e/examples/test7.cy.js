/// <reference types="Cypress" />

describe("simulate mouse hover", () => {
  it("Checked and un checked", () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });
});