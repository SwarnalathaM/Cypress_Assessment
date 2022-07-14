describe('To Visit BooksToScrape Portal',()=>{
    it('To load BookToScrape website',()=>{
        cy.visit('https://books.toscrape.com/')
    })
    it('To check the loaded page',()=>{
        cy.get('h1').contains('All products')
    })
    it('To check the result',()=>{
        cy.get('.product_pod').its('length').should('eq',20)
    })
    it('To Click and visit the category that we needed',()=>{
        cy.get('a').contains('Music').click()
    })
    it('To check the loaded page',()=>{
        cy.get('h1').contains('Music')
    })
})