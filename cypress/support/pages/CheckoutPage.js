export class CheckoutPage {

    irAlCheckout(){
        cy.get(':nth-child(5) > a > .fa').click()
    }
}