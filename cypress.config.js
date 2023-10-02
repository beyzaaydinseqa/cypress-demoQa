const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 780,
  viewportHeight: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://demoqa.com'
    
  },
});
