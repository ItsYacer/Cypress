class ConfirmationPage {
    
    submitForDetails(){
        cy.submitForDetails();
    }
    returnAlertText() {
        return cy.get('.alert-success');
    }

}

export default ConfirmationPage;