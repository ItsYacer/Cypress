/// <reference types="Cypress" />

describe("My third Test", () => {
  it("Checked and un checked", () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((price) => {
          const priceText = price.text();
          expect(priceText).to.equal("25");
        });
      }
    });
  });
});