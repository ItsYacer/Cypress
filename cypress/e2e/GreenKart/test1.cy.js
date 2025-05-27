/// <reference types="Cypress" />

describe("My First Test", () => {
  it("search and validate result", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);  //by jQuery selector i can only get the visible elements
    cy.get('.products').as('productLocator'); //aliasing the element for later use
    cy.get('@productLocator').find('.product').should('have.length', 4); //by parent then child can only get the elements inside specific scope
    cy.get('.products .product').should('have.length', 4); //by parent then child can only get the elements inside specific scope
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click(); //eq(2) means the third element in the list
    cy.get('@productLocator').find('.product').each(($el, index, $list) => { //each() is a jQuery method that iterates over a set of matched elements
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
      });
      cy.get('.brand').then((logo)=>{
        cy.log(logo.text()); //this will log the text of the element with class brand
      })
  });
});