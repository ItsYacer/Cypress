import HomePage from "../../support/pageObjects/HomePage.js";

describe("End to End Example",()=>{

    before(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.homePage = new HomePage();
        })
    })

    it("Submit Order",function () {

        const productName = this.data.productName;
        
        this.homePage.goTo(Cypress.env("url")+"/loginpagePractise/#")
        const ProductPage = this.homePage.login(this.data.userName, this.data.password);

        ProductPage.pageValidation();
        ProductPage.getcardCount();
        ProductPage.selectProduct(productName);
        ProductPage.selectFirstProduct();
        const cartPage = ProductPage.goToCart();
        
        cartPage.sumOfProducts().then((sum) => {
           expect(sum).to.be.lessThan(200000);
        });

        const confirmationPage = cartPage.goToCheckout();
        confirmationPage.submitForDetails();
        confirmationPage.returnAlertText().should('contain',"Success")

    })
})