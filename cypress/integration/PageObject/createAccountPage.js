class createAccountPage {
    
    getPassword() {
        return cy.get('#password')
    }

    getPasswordMessage() {
        return cy.get('#password-strength-meter-label')
    }
    
    getName() {
        return cy.get('#firstname')
    }
    
    getLastName() {
        return cy.get('#lastname')
    }

    getEmail() {
        return cy.get('#email_address')
    }

    getPasswordConfirmation() {
        return cy.get('#password-confirmation')
    }

    getCreateAccountBtn() {
        return cy.get('[title*="Create"][type="submit"]')
    }
    

}

export default createAccountPage;