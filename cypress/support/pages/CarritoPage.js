export class CarritoPage {

    verCarrito(){
        cy.get(':nth-child(4) > a > .fa').click()
    }
}