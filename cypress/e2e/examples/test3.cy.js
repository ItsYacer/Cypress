/// <reference types="Cypress" />

describe("My third Test", () => {
  it("Checked and un checked", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    //check boxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1'); //check the checkbox and validate the value
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked'); //uncheck the checkbox and validate the value
    cy.get('input[type="checkbox"]').check(['option2', 'option3']); //check multiple checkboxes by get a common attribute of all checkboxes then check the values as array
    
    //static dropdown
    cy.get('select').select('option2').should('have.value', 'option2'); //select the dropdown and validate the value

    //dynamic dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el,index, list)=>{ 
      if($el.text() === 'India'){
        cy.wrap($el).click(); //click on the element which has the text 'india'
      }
    })
    cy.get('#autocomplete').should('have.value', 'India'); //validate the value of the input field

    //visible and invisible elements
    cy.get('#displayed-text').should('be.visible'); 
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');


    //radio buttons
    cy.get('label .radioButton').check(['radio1']).should('be.checked'); 


  });
});