/// <reference types="Cypress" />

describe("Cross domain first way", () => {
  it("Checked and un checked", () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('#opentab').invoke('removeAttr', 'target').click(); //remove the target attribute and click on the link to open in the same tab
    
    cy.origin('https://www.qaclickacademy.com/', () => {
      cy.get('#navbarSupportedContent a[href="about.html"]').click();
      cy.get('.mt-50 h2').should('contain',"QAClick Academy");
        });
  });
});