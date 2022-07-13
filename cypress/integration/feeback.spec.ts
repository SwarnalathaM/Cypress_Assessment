describe('To Visit and Submit Feedback',()=>{
    it('To visit Feedback Page',()=>{
        cy.visitFeedbackpage()
    })
    it('To fill the Feedback',()=>{
        cy.submitFeedback('swarna','email@xyz.com','Test','Test Message')
    })
})