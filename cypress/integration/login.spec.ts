describe('To Visit the Home & login page', () => {
    it('To Visit the Homepage', () => {
        cy.visitHomepage()
        cy.signin()
    })
    it('To Visit LoginPage and Signin', () => {
        cy.visitLoginpage()
        cy.tocheckloginpage()
        cy.login('TestUsername', 'TestPassword')
    })
})