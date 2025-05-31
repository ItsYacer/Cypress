Feature: End-to-End Testing for E-commerce Application

    Feature Description
    @regression
    Scenario: Ecommerce Product Delivery
        Given I am on Ecommerce homepage
        When I login to the Application
        And I add items to the cart and checkout
        And Validate the total price limit
        Then seclect country and submit and verify thank you message

    @Smoke
    Scenario: Ecommerce Product Delivery Cucmber data driven
        Given I am on Ecommerce homepage
        When I login to the Application portal 
        |username           |password   |
        |rahulshettyacademy |learning   |
        And I add items to the cart and checkout
        And Validate the total price limit
        Then seclect country and submit and verify thank you message