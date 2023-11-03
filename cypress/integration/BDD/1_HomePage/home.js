import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from '../../PageObject/homePage'
const hmPage = new homePage()

//  Scenario 1: authenticate as a client

Given('I visit the website', () => {
  cy.visit(Cypress.env('url'))
});

Then('I check the presence of the default title', function () {
  hmPage.getPageLogInTitle().invoke('text').should('include', 'Click “Write for us” link in the footer to submit a guest post')

});

And('I check the possibility to sign-in', () => {
  hmPage.getSignInBtn().filter(':visible').click()
  hmPage.getPageTitle().invoke('text').should('include', 'Customer Login')
});

And('I check the possibility to create account', () => {
  cy.wait(2000)
  hmPage.getCreateAccountBtn().filter(':visible').click()
  hmPage.getPageTitle().invoke('text').should('include', 'Create New Customer Account')
});

And('I check the presence of the LUMA logo', () => {
  hmPage.getLogo().should('be.visible')
});

And('I mouse hover on an element of the menu', () => {
  hmPage.getMenuItemsBtn().contains('Women').wait(2000).trigger('mouseover')
});

Then('I check the menu list is visible', () => {
  hmPage.getMenuItemsBtn().contains('Women').should('be.visible')
});

And('I mouse hover on an element of the list', () => {
  hmPage.getMenuItemsBtn().contains('Tops').wait(2000).trigger('mouseover')
});

Then('I check that the sub-menu is visible', () => {
  hmPage.getMenuItemsBtn().contains('Tops').should('be.visible')
});

When('I click on a menu item', () => {
  hmPage.getMenuItemsBtn().contains('Jacket').click()
});

Then('The required page is opened', () => {
  hmPage.getCategoryTitle().should('be.visible').should('include.text', 'Jackets')
});

Then('I check that the footer is visible', () => {
  hmPage.getFooter().should('be.visible')
});

And('I check the footer items are visible', () => {
  hmPage.getFooterItems().eq(0).should('be.visible').should('include.text', 'Write for us')
  hmPage.getFooterItems().eq(1).should('be.visible').should('include.text', 'Subscribe to our mailing list')
  hmPage.getFooterItems().eq(2).should('be.visible').should('include.text', 'Contact us')
  hmPage.getFooterItems().eq(3).should('be.visible').should('include.text', 'Hire a Sofware Testing/QA Company')
  hmPage.getFooterItems().eq(4).should('be.visible').should('include.text', 'Search Terms')
  hmPage.getFooterItems().eq(5).should('be.visible').should('include.text', 'Privacy and Cookie Policy')
  hmPage.getFooterItems().eq(6).should('be.visible').should('include.text', 'Advanced Search')
  hmPage.getFooterItems().eq(7).should('be.visible').should('include.text', 'Orders and Returns')
  
});

And('I check footer items links', () => {
  hmPage.getFooterItems().eq(0).should('be.visible').should('have.attr', 'href', 'https://softwaretestingboard.com/write-for-us/')
  hmPage.getFooterItems().eq(1).should('be.visible').should('have.attr', 'href', 'https://softwaretestingboard.com/subscribe/')
  hmPage.getFooterItems().eq(2).should('be.visible').should('have.attr', 'href', 'https://softwaretestingboard.com/contact/')
  hmPage.getFooterItems().eq(3).should('be.visible').should('have.attr', 'href', 'https://adeunqa.com')
  hmPage.getFooterItems().eq(4).should('be.visible').should('have.attr', 'href', 'https://magento.softwaretestingboard.com/search/term/popular/')
  hmPage.getFooterItems().eq(5).should('be.visible').should('have.attr', 'href', 'https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode/')
  hmPage.getFooterItems().eq(6).should('be.visible').should('have.attr', 'href', 'https://magento.softwaretestingboard.com/catalogsearch/advanced/')
  hmPage.getFooterItems().eq(7).should('be.visible').should('have.attr', 'href', 'https://magento.softwaretestingboard.com/sales/guest/form/')
});