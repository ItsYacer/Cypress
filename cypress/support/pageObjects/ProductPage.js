import CartPage from "./CartPage";

class ProductPage{

pageValidation() {
        cy.contains("Shop Name").should("be.visible");
}

getcardCount(){
        cy.get("app-card").should("have.length", 4);
}

selectFirstProduct() {
        cy.get("app-card").eq(0).contains('button', 'Add').click();
}

goToCart(){
    cy.contains('a', 'Checkout').click();
    return new CartPage();
}

selectProduct(productName) {
        cy.get("app-card").filter(`:contains(${productName})`).then(($el) => {
            
            cy.wrap($el).should('have.length', 1);

            cy.wrap($el).contains('button', 'Add').click();
        });
    }

}

export default ProductPage;