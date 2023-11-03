import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import catalogPage from '../../PageObject/catalogPage'
import homePage from '../../PageObject/homePage'


const cataPage = new catalogPage()
const hmPage = new homePage()
const productName = "Juno Jacket"
const size = "M"
let ProdName
let Size
let Color
let Quantity


Given('I visit the website', () => {
  cy.visit(Cypress.env('url'))
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

Then('I check the items added to cart', () => {
  hmPage.getMenuItemsBtn().contains('Tops').should('be.visible')
});

Then('The required page is opened', () => {
  hmPage.getCategoryTitle().should('be.visible').should('include.text', 'Jackets')
});

When('I mouse hover an element from the list of items', () => {
  cataPage.getProductName().contains(productName).wait(2000).trigger('mouseover')
});

Then('I add item to the Cart', () => {


  const filePath = 'cypress/fixtures/Products.csv';
  cy.readCsvTable(filePath).then((matrix) => {

    ProdName = matrix[1][0].toString()
    Size = matrix[1][1].toString()
    Color = matrix[1][2].toString()
    Quantity = matrix[1][3].toString()

    cataPage.getSearch().clear().type(ProdName).type('{enter}')
    cataPage.getProductItems().each(($Prod, index) => {
      if ($Prod.text().includes(ProdName)) {
        const i = index + 1;
        //Selectionner taille
        cy.get('.product-items>:nth-child(' + i + ') [aria-label="Size"] .swatch-option').contains(Size).click()
        //Selectionner couleur
        cy.get('.product-items>:nth-child(' + i + ') [attribute-code="color"] .swatch-option').then(listing => {
          const listingCount = Cypress.$(listing).length;
          for (let j = 0; j < listingCount; j++) {
            cy.get('.product-items>:nth-child(' + i + ') [attribute-code="color"] .swatch-option').eq(j).invoke('css', 'background-color').then((color) => {
              if (color === ColorToRGB(Color)) {
                cy.get('.product-items>:nth-child(' + i + ') [attribute-code="color"] .swatch-option').eq(j).click();
              }
            })
          }
        })
      }
    })
  });
});

And('I place an order', () => {

});

Then('I verify the exact delivery information with the shipping page', () => {

});

And('I check the correspondence of the basket total with the quantity per item', () => {

});

Then('I check the display of the confirm message and the order number', () => {

});

Then('Sign-out', () => {

});

When('I sign-in to the application', function () {
  hmPage.getSignInBtn().filter(':visible').click()
  cy.authentication(this.data.Login, this.data.PWD)
});

function ColorToRGB(color){
  if(color=='Blue'){
    return('rgb(24, 87, 247)')
  }
  if(color=='Yellow'){
    return('rgb(255, 213, 0)')
  }
  if(color=='Red'){
    return('rgb(255, 0, 0)')
  }
  if(color=='Green'){
    return('rgb(83, 168, 40)')
  }
  if(color=='Pink'){
    return('rgb(239, 61, 255')
  }
  
}
