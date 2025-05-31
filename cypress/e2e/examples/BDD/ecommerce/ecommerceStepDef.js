import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage.js";
const homePage = new HomePage();

Given('I am on Ecommerce homepage', () => {

    homePage.goTo(Cypress.env("url") + "/loginpagePractise/#")
})

When('I login to the Application', function () {

    this.productPage = homePage.login(this.data.userName, this.data.password);
    this.productPage.pageValidation();
    this.productPage.getcardCount().should("have.length", 4);
})

When('I login to the Application portal', function (dataTable) {

    this.productPage = homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
    this.productPage.pageValidation();
    this.productPage.getcardCount().should("have.length", 4);
})

When('I add items to the cart and checkout', function () {

    this.productPage.selectProduct(this.data.productName);
    this.productPage.selectFirstProduct();
    this.cartPage = this.productPage.goToCart();
});

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then((sum) => {
        expect(sum).to.be.lessThan(200000);
    });
});

Then('seclect country and submit and verify thank you message', function () {
    const confirmationPage = this.cartPage.goToCheckout();
    confirmationPage.submitForDetails();
    confirmationPage.returnAlertText().should('contain', "Success")
});