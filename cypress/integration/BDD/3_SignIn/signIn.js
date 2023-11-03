import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from '../../PageObject/homePage'
import CustomerLoginPage from '../../PageObject/CustomerLoginPage'
const hmPage = new homePage()
const clPage = new CustomerLoginPage()


Given('I visit the website', () => {
  cy.visit(Cypress.env('url'))

});

When('I click on sign in button', function () {
  hmPage.getSignInBtn().filter(':visible').click()  
});

Then('I check that sign in page is opened', () => {
  clPage.getCustomerLoginTitle().should('be.visible')
});

When('I authenticate', function () {
  cy.authentication(this.data.Login, this.data.PWD)
});

Then('I check that I logged in to the application', () => {
  clPage.getGreetWelcome().should('include.text', 'Welcome, Name LastName!')
});