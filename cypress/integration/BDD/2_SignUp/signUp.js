import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from '../../PageObject/homePage'
import createAccountPage from '../../PageObject/createAccountPage'


const hmPage = new homePage()
const CreateAccPage = new createAccountPage()
var name;
var lastName;
var emailAddress;
const password = "123456 aze??**"


Given('I visit the website', () => {
  cy.visit(Cypress.env('url'))
});


When('I click on the create an account button', () => {
  //Il existe 2 éléments [class="header links"] li:nth-child(3) de "getCreateAccountBtn" l'un apparaît et l'autre non
  //.filter(':visible') aide à sélectionner l'élément visible
  hmPage.getCreateAccountBtn().filter(':visible').click()
});

Then('I check that the account creation page is opened', () => {
  //Vérification que la page de "Création de compte" a été ouverte en vérifiant le titre de page
  hmPage.getPageTitle().invoke('text').should('include', 'Create New Customer Account')
});

When('I keep Password field empty', () => {
  //Confirmation que le champ mot de passe est vide
  CreateAccPage.getPassword().clear()
});

Then('No password message displayed', () => {
  //Confirmation qu'un message s'affiche indique qu'il n'y a pas de mot de passe
  CreateAccPage.getPasswordMessage().should('include.text', 'No Password')
});

When('I type weak password', () => {
  //Saisie d'une mot de passe faible
  CreateAccPage.getPassword().type('123456')
});

Then('Weak message displayed', () => {
   //Confirmation qu'un message s'affiche indique que le mot de passe est faible
  CreateAccPage.getPasswordMessage().should('include.text', 'Weak')
});

When('I type medium password', () => {
   //Saisie d'une mot de passe moyenne
  CreateAccPage.getPassword().clear().type('123456 aze')
});

Then('Medium message displayed', () => {
  //Confirmation qu'un message s'affiche indique que le mot de passe est moyenne
  CreateAccPage.getPasswordMessage().should('include.text', 'Medium')
});

When('I type strong password', () => {
  CreateAccPage.getPassword().clear().type('123456 aze??')
});

Then('Strong message displayed', () => {
  CreateAccPage.getPasswordMessage().should('include.text', 'Strong')
});

When('I type very strong password', () => {
  CreateAccPage.getPassword().clear().type('123456 aze??**')
});

Then('Very strong message displayed', () => {
  CreateAccPage.getPasswordMessage().should('include.text', 'Very Strong')
});

Then('I create an account', () => {
  // Générer un nom avec 'user_' suivi de 6 chiffres
  lastName = `user_${Math.floor(Math.random() * 900000) + 100000}`;

  // Générer un prénom de 5 caractères alphabétiques différents
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  name = '';
  while (name.length < 5) {
    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (!name.includes(randomChar)) {
      name += randomChar;
    }
  }

  // Générer une adresse email en combinant le prénom et le nom
  emailAddress = `${name}.${lastName}@yopmail.com`;

  CreateAccPage.getName().type(name)
  CreateAccPage.getLastName().type(lastName)
  CreateAccPage.getEmail().type(emailAddress)
  CreateAccPage.getPassword().type(password)
  CreateAccPage.getPasswordConfirmation().type(password)
  CreateAccPage.getCreateAccountBtn().click()

});
