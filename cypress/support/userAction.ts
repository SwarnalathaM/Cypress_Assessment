declare namespace Cypress{
    interface Chainable{
       /**
         * @param username
         * @param password
         */
        signin(): Chainable<Element>
        login(username: string, password: string): Chainable<Element>    
        tocheckloginpage():Chainable<Element>
        /**
         *
         * @param name
         * @param email
         * @param subject
         * @param message
         */
        submitFeedback(name:string,email:string,subject:string,message:string):Chainable<Element>
    }
}
Cypress.Commands.add('signin',()=>{
cy.contains('Signin').click()
})
Cypress.Commands.add('tocheckloginpage',()=>{
cy.url().should('include','login.html')
})

Cypress.Commands.add('login',(username,password)=>{
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
  //  cy.contains('Sign in').click()
})
Cypress.Commands.add('submitFeedback',(name,email,subject,message)=>{
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(message)
  //  cy.contains('Send Message').click()
})