export class HomePage {

    agregarPrimerProductoAlCarrito(){
        cy.contains('Add to Cart').first().click();
        cy.wait(3000);
        cy.get('.alert').should('exist');
    }
    agregarSegundoProductoAlCarrito(){
    cy.get(':nth-child(4) > .product-thumb > .image > a > .img-responsive').click();
        cy.get('#input-option226').select("Red");
        cy.wait(3000);
        cy.get('#button-cart').click();
        cy.get('.alert').should('exist');
    }
}