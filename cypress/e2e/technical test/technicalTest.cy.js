/// <reference types="cypress" />

describe('teshnical test swapro', () => {
    it('open webpage', () => {
        cy.visit('https://pettycash.kalbenutritionals.web.id/')
    });
    it('login', () => {
        cy.get('a[href*="/Account/Login"]').click()
        
        //assertion
        cy.url().should('include', '/Account/Login')

        cy.get('#txtUserName').type('michael.leonard')
        cy.get('#txtPassword').click().type('abc')
        cy.get('#txtPassword').type('abc')
        cy.get('[class="btn btn-primary"]').click()

        //assertion
        cy.get('[class="text-danger field-validation-error"]').should('exist')

        // tidak bisa diautomate karena ada captca harus minta/tektok an ke tim developer terkait hal ini
    });
});
