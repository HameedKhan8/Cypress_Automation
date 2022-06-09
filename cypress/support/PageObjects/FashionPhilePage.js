class ShopNow {

    WhenAdminIsOnLandingPage() {
        //const link = Cypress.env('baseUrl')
    cy.visit(Cypress.config('baseUrl'))
        //cy.request(Cypress.env('baseUrl'))
        //const link = 'https://www.fashionphile.com/'

    }
SearchforChanelBlackhandbag(){
    cy.get('.CookieFooter-module_wrapper__BI-xj > [data-testid="button"]').click()
    cy.wait(3000)
    cy.get('#search-input').type('Black handbag{enter}')

}
Selectthirditemfromsearch(){
    cy.wait(2000)
    cy.get(':nth-child(3) > .productListingPage_productWrap__STYTT > :nth-child(1) > img').click()
    cy.wait(2000)
    cy.get('.product_productDescription__3uETc > [data-testid="button"]').click({ force: true })

}

UserAddItemtoBag(){
    cy.wait(2000)
    cy.get('#__next > div > div.product_container__QjbIf > div > div.product_productDescription__3uETc.product_col-4__F98R_.product_col-md-4__TSc4E.product_col-sm-12__fOxmt > button').click({ force: true })

}
UserGotoCheckout(){
    cy.wait(2000)
    cy.get('[class="Modal-module_actionContainer__1OynD Modal-module_modalSM__1blXM"]').contains('Checkout').click({ force: true })
    cy.wait(2000)
    cy.get('[class="OrderSummary-module_checkout-button__3Iet_"]').contains('Checkout').click({ force: true })

}
UserEnterEmail(){
    cy.wait(2000)
    cy.get('#email').type('Hameedkhan.qa@gmail.com')
    cy.wait(1000)
    cy.get('#stepOneForm > div.endStep_endStep__R6ihL > button').click({ force: true })


}
UserEnterNameAndAddress(){
    cy.wait(1000)
    cy.get('#first-name-input-shipping').type('Hameed')
    cy.get('#last-name-input-shipping').type('khan')
    cy.wait(2000)
    cy.get('.addressForm_buttonAnchor__AO9JF').click({force:true})
    cy.wait(5000)
    cy.get('[aria-label="address input"] > [data-testid="form-input"] > .InputBase-module_inputBase__2155N > [data-testid="input"]').type('2037 SW 3rd St')
    //cy.get('[class=" SelectBase-module_selectWrapper__3A4re "]').contains('2037 SW 3rd St, Ocala FL 34471').click()

    //cy.get('#address-loqate-shipping').clickOutside();
    cy.wait(3000)
    cy.get('#phone-input-shipping').type('+1212121212121212')
    cy.get('[data-testid="button"]').click({ force: true })
    cy.wait(2000)
    cy.get('#city-input-shipping').type('Ocala')
    cy.get('#postal-code-input-shipping').type('34471-1867')
    cy.get('#state-selector-shipping').select('FL')
    cy.get('#phone-input-shipping').type('+1212121212121212')
    cy.get('[data-testid="button"]').click({ force: true })
}
UserClickOnContinueButton(){
    cy.get('#stepTwoShipping > div > button').click({ force: true })
    cy.wait(3000)
    cy.get('.Modal-module_modalButton__oOkwE').click({ force: true })
    cy.wait(2000)
}
UserSelectComplimentaryGround(){
    cy.get('#stepTwoDelivery > form > div.endStep_endStep__R6ihL > button').click()

}
UserEnterInvalidEmail(){
    cy.get('#email').type('122343434')
    cy.get('#email').should('have.value','@gmail.com')

}
}
export default ShopNow