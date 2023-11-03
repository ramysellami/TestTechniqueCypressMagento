class CustomerLoginPage {

    
    
    getCustomerLoginTitle() {
        return cy.get('[data-ui-id="page-title-wrapper"]')
    }
    
    getGreetWelcome() {
        return cy.get('.panel .logged-in')
    }
}

export default CustomerLoginPage;