const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      //sera executé après l'execution des teste:\CypressWorkspace_12.5.0\qa-print-studio\Cucumber-html-report.js
      on('after:run', (results) => {
        //Pour créer un dossier .run
        fs.mkdirSync("cypress/.run", { recursive: true });
        //Création du fichier results.json qui contient les résultats des tests et qui sera stocké dans le dossier .run
        fs.writeFile("cypress/.run/results.json", JSON.stringify(results));

      })
    },
    specPattern: 'cypress/integration/BDD/*.feature',
  },

  "viewportHeight": 650,
  "viewportWidth": 900,
  "defaultCommandTimeout": 10000,
  "videoUploadOnPasses": false,
  "video": false,
  "retries": {
    "runMode": 1
  },


  "env": {
    "url": "https://magento.softwaretestingboard.com/",

  },
});