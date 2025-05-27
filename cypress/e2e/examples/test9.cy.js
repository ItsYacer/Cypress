/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe("Cross domain way 2", () => {
  it("Frames", () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.frameLoaded('#courses-iframe'); // Load the iframe
    cy.iframe().find('a[href*="mentorship"]').eq(0).click(); // Click on the mentorship link inside the iframe
    cy.wait(2000); 
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2); // Verify the number of elements with class containing "pricing-title"
  });
});