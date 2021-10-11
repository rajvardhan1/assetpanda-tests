/// <reference types="cypress" />

import DateUtils from './../../support/utils/DateUtils';

var dateUtils = new DateUtils();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe("Tests on home page", () => {

    beforeEach(() => {
        cy.visit('https://prelive.assetpanda.com/users/sign_in')

        cy.intercept('POST', 'https://prelive.assetpanda.com/users/sign_in').as("submit");
        cy.get('input[name="user[email]"]').type("reservations@assetpanda.com");
        cy.get('input[name="user[password]"]').type("panda123");
        cy.get('input[type="submit"]').click();
        cy.wait("@submit").its("response.statusCode").should('eq', 302)
    })

    // it("Should Have Tabs", () => {
    //     cy.get('ul[id="asset-menu"] li:first a').should("have.text", "Assets");
    //     cy.get('ul[id="asset-menu"] li').eq(1).children('a').should("have.text", "Categories");
    //     cy.get('ul[id="asset-menu"] li').eq(2).children('a').should("have.text", "Locations");
    //     cy.get('ul[id="asset-menu"] li').eq(3).children('a').should("have.text", "Rooms");
    //     cy.get('ul[id="asset-menu"] li').eq(4).children('a').should("have.text", "Employees");
    //     cy.get('ul[id="asset-menu"] li').eq(5).children('a').should("have.text", "Calendar");
    //     cy.get('ul[id="asset-menu"] li').eq(6).children('a').should("have.text", "Reports");

    //     //Should Navigate to Calendar

    //     // Should Navigate to Reports

    //     //Should Navigate to Employees Tab

    //     //Should Navigage to Rooms

    //     //should navigate to Locations 

    //     //should navigate to assets

    //     //Asset Detail page

    // })

    // it("Should navigate to Assets Tab", () => {
    //     cy.get('ul[id="asset-menu"] li:first a').click();
    //     cy.url().should('include', '/asset_items');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[data-name="Assets"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'APID').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Category').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Description').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Manufacturer').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Model').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Serial #').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Employee').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Location').should('be.visible');
    //     // cy.get('table[id="asset-list"]').contains('th', 'Room').should('be.visible');
    //     // cy.get('table[id="asset-list"]').contains('th', 'Status').should('be.visible');

    //     //search
    //     cy.get('span[id="search-button"]').click();
    //     cy.get('ul').children('.filter');

    //     cy.get('div[class="selectize-dropdown-content"]').should('exist')
    //     cy.get('ul').children('.filter').first().click();
    //     cy.get('div[data-value="all"]').should('be.visible').contains('All')
    //     // // cy.get('div[data-value="field_196"]').should('be.visible').contains('APID')
    //     // // cy.get('div[data-value="field_1"]').should('be.visible').contains('Asset ID')
    //     // // cy.get('div[data-value="field_15"]').should('be.visible').contains('Category')
    //     // // cy.get('div[data-value="field_4"]').should('be.visible').contains('Description')
    //     // // cy.get('div[data-value="field_6"]').should('be.visible').contains('Manufacturer')
    //     // // cy.get('div[data-value="field_8"]').should('be.visible').contains('Model')
    //     // // cy.get('div[data-value="field_10"]').should('be.visible').contains('Serial #')
    //     // // cy.get('div[data-value="field_5"]').should('be.visible').contains('Purchase From')
    //     // // cy.get('div[data-value="field_2"]').should('be.visible').contains('Purchase Date')
    //     // // cy.get('div[data-value="field_9"]').should('be.visible').contains('Cost')
    //     // // cy.get('div[data-value="field_40"]').should('be.visible').contains('Warranty Info')
    //     // // cy.get('div[data-value="field_41"]').should('be.visible').contains('Warranty Expiration Date')
    //     // // cy.get('div[data-value="field_29"]').should('be.visible').contains('End of Life Date')
    //     // // cy.get('div[data-value="field_18"]').should('be.visible').contains('Next Service Date')
    //     // // cy.get('div[data-value="field_16"]').should('be.visible').contains('Employee')
    //     // // cy.get('div[data-value="field_13"]').should('be.visible').contains('Location')
    //     // // cy.get('div[data-value="field_195"]').should('be.visible').contains('Room')
    //     // // cy.get('div[data-value="field_12"]').should('be.visible').contains('Date Added')

    //     // cy.get('input[id="search_form_term"]').should('exist').should('be.visible');
    //     // cy.get('input[id="search_form_term"]').type('Servers');
    //     // cy.get('.search-bar-button').click();
    // })

    // it("Should Navigate to the Locations Tab", () => {
    //     cy.get('ul[id="asset-menu"] li').eq(2).children('a').click();
    //     cy.url().should('include', '/locations');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[data-name="Locations"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'Name').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Address').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Description').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Status').should('be.visible');
    // })

    // it("Should Navigate to the Categories Tab", () => {
    //     //should navigate to categories 
    //     cy.get('ul[id="asset-menu"] li').eq(1).children('a').click();
    //     cy.url().should('include', '/categories');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[data-name="Categories"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'Name').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Notes').should('be.visible');
    // })

    // it("Should Navigate to the Rooms Tab", () => {
    //     cy.get('ul[id="asset-menu"] li').eq(3).children('a').click();
    //     cy.url().should('include', '/rooms');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[data-name="Rooms"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'Name').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Notes').should('be.visible');
    // })

    // it("Should Navigate to the Employees Tab", () => {
    //     cy.get('ul[id="asset-menu"] li').eq(4).children('a').click();
    //     cy.url().should('include', '/employees');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[data-name="Employees"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'Name').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Job Title').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Email').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Phone').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Status').should('be.visible');
    // })

    // it('Should Navigate to the Calinder Tab', () => {
    //     cy.get('ul[id="asset-menu"] li').eq(4).children('a').click();
    //     cy.url().should('include', '/calender');
    //     cy.get('input[name="search_form[term]"]').should('exist');
    // })

    // it('Should Navigate to the Reports Tab', () => {
    //     cy.get('ul[id="asset-menu"] li').eq(5).children('a').click();
    //     cy.url().should('include', '/reports');
    //     cy.get('input[name="search_form[term]"]').should('exist');

    //     cy.get('form[id="delete-items"]').should('exist');
    //     cy.get('table[id="asset-list"]').contains('th', 'Group Reports').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Job Title').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Email').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Phone').should('be.visible');
    //     cy.get('table[id="asset-list"]').contains('th', 'Status').should('be.visible');
    // })

    // it("Should Able to view the asset details", () => {

    //     cy.get('ul[id="asset-menu"] li:first a').click();
    //     cy.url().should('include', '/asset_items');
    //     cy.get('.custom-td').first().click();
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li:first a').should("have.text", "Details");
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li').eq(1).children('a').should("have.text", "Actions");
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li').eq(2).children('a').should("have.text", "Audit History");
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li').eq(3).children('a').should("have.text", "Notification History");
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li').eq(4).children('a').should("have.text", "Changes");
    //     cy.get('ul[class="nav nav-tabs nav-justified"] li').eq(5).children('a').should("have.text", "Linked");

    //     //Asset Detail page > Details 
    //     cy.get('label[for="values_field_196"]').should('be.visible').should('have.text', 'APIDAPID');
    //     cy.get('label[for="values_field_15"]').should('be.visible').should('have.text', 'CategoryCategory');
    //     cy.get('label[for="values_field_10"]').should('be.visible').should('have.text', 'Serial #Serial #');

    //     cy.get('.edit-icon-onhover').first().click();
    //     cy.get('input[id="values_field_9"]').clear().type('1,333')
    //     cy.get('.cancel-button').children('a').click();
    //     cy.get('.ui-dialog-buttonset').find('button').contains('No, Leave This Page').click();
    // })

    it("Should Navigate to Add New Asset", () => {
        cy.get('ul[id="asset-menu"] li:first a').click();
        cy.url().should('include', '/asset_items');

        cy.get('.custom-add-btn').should('have.text', 'Add New')
        cy.get('.custom-add-btn').click();

        cy.url().should('include', '/asset_items/new');

        //Fill new asset form 
        cy.get('#values_field_196').should('be.visible');
        cy.get('#value_ids_field_15-selectized').should('be.visible')
            .invoke('attr', 'placeholder').should('contain', 'Type to Search');
        cy.get('#value_ids_field_15-selectized').type('Camera')
        // cy.get('.selectize-dropdown-content').its('length').should('be.greaterThan', 1);
        // cy.get('.selectize-dropdown-content').then(childern => {
        //     console.log('following are children')
        //     console.log(childern);
        //     console.log('child-1')
        //     console.log(childern[1])
        //     cy.get(childern[1]).click({ force: true });
        // })

        // cy.get("#values_field_6").should('exist').type('HP');
        // cy.get("#values_field_10").should('exist').type('Hp bs-405')
        cy.get('input[name="values[field_2]"]').should('exist').click();
        // cy.get('.ui-datepicker-calendar > tr').eq(1).should('exist')

        // cy.get('#\36 1131452')

        cy.get('#ui-datepicker-div').should('be.visible')

        // cy.selectYear(2019)

        // cy.selectMonth('Jan')

        // cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').eq(14).click()
        // cy.log('14 day is selected')

        cy.get('.ui-datepicker-prev > .ui-icon').click();

        cy.get('.ui-datepicker-next > .ui-icon').click();
        //choose date 24

        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()

        //serial number
        cy.get('#values_field_10').type('EF100');

        //manufacturer
        cy.get('#values_field_6').type('HP');

        //Warranty info
        cy.get('#values_field_40').type('None');

        //End of life date
        cy.get('input[name="values[field_29]"]').should('exist').click();

        cy.get('#ui-datepicker-div').should('be.visible')

        // cy.get('.ui-datepicker-month option').eq('Feb').click()

        // cy.get('.ui-datepicker-year').contains('2025').click()

        cy.get('table.ui-datepicker-calendar a.ui-state-default').eq(16).click();

    })

});