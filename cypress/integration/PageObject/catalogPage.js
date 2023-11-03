class catalogPage {

    //Size of the product (XS, S, M, L, XL)
    //id* id's attribut is dynamic, so I added * and I removed the dynamic part of the attribut. 
    getSize() {
        return cy.get('[class="swatch-attribute size"')
    }
    
    getColor() {
        return cy.get('[class="swatch-attribute color"]')
    }
    
    getAddToCart() {
        return cy.get('[class="action tocart primary"]')
    }
    
    getProductName() {
        return cy.get('.product-item-link')
    }
    
    getSearch() {
        return cy.get('#search')
    }

    getProductItems() {
        return cy.get('.product-items>li')
    }
}

export default catalogPage;