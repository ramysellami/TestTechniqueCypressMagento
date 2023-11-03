// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import authenticationPage from '../integration/PageObject/authenticationPage'
const authPage = new authenticationPage()

Cypress.Commands.add("authentication", (login, pwd) => {
    //Authentification
    
    authPage.getUserName().type(login)
    authPage.getPassword().type(pwd)
    authPage.getSignIn().filter(':visible').click()

})

Cypress.Commands.add('readCsvTable', (filePath) => {
    return cy
      .readFile(filePath, 'utf8') // Read the CSV file as text
      .then((csvContent) => {
        // Split the CSV data into rows and columns
        const rows = csvContent.trim().split('\n');
        const matrix = [];
  
        // Parse each row and split into columns
        rows.forEach((row) => {
          const columns = row.split(';');
          matrix.push(columns);
        });
  
        return matrix;
      });
  });