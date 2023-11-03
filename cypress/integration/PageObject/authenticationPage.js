class authenticationPage {
    
    getUserName() {
        return cy.get('[name="login[username]"]')
    }

    getPassword() {
        return cy.get('[name="login[password]"]')
    }

    getSignIn() {
        return cy.get('[name="send"]')
    }
    

}

export default authenticationPage;