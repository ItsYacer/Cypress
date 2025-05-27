/// <reference types="Cypress" />

describe("Calender dealing", () => {
  it("Frames", () => {

    const monthDate ="6";
    const dayDate ="15";
    const yearDate ="2027";



    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    cy.get('.cart-header-navlink:contains("Top Deals")').invoke('removeAttr','target').click();

    cy.get('.react-date-picker__inputGroup').click();
    cy.get('.react-calendar__navigation__label').click();
    cy.get('.react-calendar__navigation__label').click();
    cy.get(`[type="button"]:contains(${yearDate})`).click();
    cy.get('.react-calendar__year-view__months__month').eq(Number(monthDate)-1).click();
    cy.contains("abbr", Number(dayDate)).click();

    cy.get('.react-date-picker__inputGroup__input').each(($el, index, $list) => {
      switch (index) {
        case 0:
          cy.wrap($el).should('have.value', `${monthDate}`);
          break;
        case 1:
          cy.wrap($el).should('have.value', `${dayDate}`);
          break;
        case 2:
          cy.wrap($el).invoke('val').then((val) => {
            ;
            expect(val).to.equal(yearDate);
          });
          break;
      }
    });
  });
});