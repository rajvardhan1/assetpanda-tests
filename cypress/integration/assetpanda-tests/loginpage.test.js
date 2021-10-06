/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Tests on login page", () => {

    beforeEach(() => {
        cy.visit("https://prelive.assetpanda.com/users/sign_in");
    })

    it("Should have a form", () => {
        const form = cy.get("form");
        form.should("exist");
        form.contains("a").should("have.text", "Request a demo");
        form.get('input[name="user[email]"]').should("exist");
        form.get('input[name="user[password]"]').should("exist");
        // form.get('div[class="login-page-google"]').contains('a').should("have.text", "Sign in with Google");
        form.get('input[type="submit"]').should("exist");
    })

    it("Should send http request with login payload", () => {
        cy.intercept('POST', 'https://prelive.assetpanda.com/users/sign_in').as("submit");
        cy.get('input[name="user[email]"]').type("reservations@assetpanda.com");
        cy.get('input[name="user[password]"]').type("panda123");
        cy.get('input[id="user_remember_me"]').check();
        cy.get('input[type="submit"]').click();

        // cy.wait("@submit").its("request.body").should("include", "authenticity_token");
        // cy.wait("@submit").its("request.body").should("include", "user%5Bemail%5D")
        // cy.wait("@submit").its("request.body").should("include", "user%5Bpassword%5D")
        cy.wait("@submit").its("response.statusCode").should('eq', 302)

    })
})