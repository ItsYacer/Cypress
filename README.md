**Cypress Automation Project**
This project is a hands-on Cypress automation framework developed to practice and demonstrate my complete learning path in Cypress—from basic to advanced topics. It serves as a personal learning lab covering end-to-end UI testing automation for a sample eCommerce web application.

Project Overview
This project serves as a comprehensive demonstration of Cypress capabilities, covering:
    Basic DOM interactions and assertions
    Advanced patterns like Page Object Model (POM)
    Integration with BDD (Cucumber)
    Test reporting
    CI/CD considerations

Key Features Implemented
  Core Cypress Functionality
    ✅ Basic element selection and interaction
    ✅ Form filling and validation
    ✅ Checkbox/radio button handling
    ✅ Dropdown selections (static and dynamic)
    ✅ Handling alerts and popups
    ✅ Table data validation
    ✅ Mouse hover interactions
    ✅ Cross-domain testing

Advanced Patterns
  🏗️ Page Object Model implementation
  🥒 Cucumber BDD integration
  📊 Mochawesome reporting
  🔄 Retry mechanisms
  🌐 Cross-domain testing techniques

How to Run Tests
Basic Commands

# Run all tests headless
npm test

# Run tests in headed mode
npm run headedTest

# Run tests in Chrome browser
npm run chromeTest

Targeted Runs

# Run specific test suite
npm run GreenKartTest

# Run smoke tests
npm run SmokeTest

Advanced Options

# Run with dashboard recording
npm run recordDashBoardTest

Reporting
The project is configured with:

  Mochawesome HTML reports
  Cucumber JSON reports (for BDD tests)
  Reports are generated automatically in the cypress/reports directory after test runs.

CI/CD Integration
The project is configured with:
  Project ID for Cypress Dashboard integration
  Retry mechanisms for flaky tests
  All necessary dependencies for Jenkins integration

Learning Journey
This project documents my progression with Cypress from:

  Basic element interactions
  Form validations and dynamic content handling
  Advanced patterns like POM
  BDD integration with Cucumber
  Comprehensive reporting
  CI/CD considerations
