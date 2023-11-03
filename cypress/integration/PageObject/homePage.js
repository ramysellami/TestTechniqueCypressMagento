class landingPage {

    getLogo() {
        return cy.get('[class="logo"]')
    }
    
    getSignInBtn() {
        return cy.get('[class="authorization-link"]')
    }

    getPageLogInTitle() {
        return cy.get('[class="page-header"] [class="not-logged-in"]')
    }
       
    getPageTitle() {
        return cy.get('[data-ui-id="page-title-wrapper"]')
    }

    getCreateAccountBtn() {
        return cy.get('[class="header links"] li:nth-child(3)')
    }

    getMenuItemsBtn() {
        return cy.get('[id="store.menu"] li')
    }
    
    getCategoryTitle() {
        return cy.get('[id="page-title-heading"]')
    }
    
    getFooter() {
        return cy.get('[class="footer content"]')
    }
    
    getFooterItems() {
        return cy.get('[class="page-footer"] li a')
    }

}

export default landingPage;