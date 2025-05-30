Feature: End-to-End Testing for E-commerce Application

    Feature Description

    Scenario: Ecommerce Product Delivery
        Given I am on Ecommerce homepage
        When I login to the Application
        And I add items to the cart and checkout
        And Validate the total price limit
        Then seclect country and submit and verify thank you message