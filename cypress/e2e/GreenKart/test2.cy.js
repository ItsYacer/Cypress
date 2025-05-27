/// <reference types="Cypress" />

describe("My second Test", () => {
  it("check cart", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
   
    cy.get('.products').as('productLocator'); //aliasing the element for later use
   
    cy.get('@productLocator').find('.product').each(($el, index, $list) => { //each() is a jQuery method that iterates over a set of matched elements
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
      });
      cy.get('.cart-icon').click();
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();
      
  });
});