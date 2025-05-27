/// <reference types="Cypress" />

describe("Cross domain way 2", () => {
  it("Checked and un checked", () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('#opentab').then((el) => {
      const url = el.prop('href');
      cy.visit(url); // Open the link in the same tab
      cy.origin(url, () => {
        cy.get('#navbarSupportedContent a[href="about.html"]').click();
        
      });
    });
  });
});