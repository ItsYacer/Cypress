/// <reference types="Cypress" />

describe("browser build in popups and alerts", () => {
  it("Checked and un checked", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();
    cy.on('window:alert', (str) => {
      //Mocha's expect function
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    }); 
    cy.on('window:confirm', (str) => {
      //Mocha's expect function
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    }); 

  });
});