const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url: "https://rahulshettyacademy.com"
    },
    reporter: 'cypress-mochawesome-reporter',
    projectId: "5er8me",
    retries:{
      runMode: 1
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
