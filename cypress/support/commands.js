// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('selectYear', (yearName) => {

    const currentYear = new Date().getFullYear();

    cy.get('.ui-datepicker-year').then(($year) => {

        cy.log($year.text(), ' year-1')

        if ($year.text() == yearName) {
            cy.log(yearName, ' year selected');
            return;
        }
        else {

            if (yearName < currentYear) {
                cy.get('.ui-datepicker-prev > .ui-icon').click()
            }
            else if (yearName > currentYear) {
                cy.get('.ui-datepicker-next > .ui-icon').click()
            }
        }

        cy.selectYear(yearName)

    })

})

Cypress.Commands.add('selectMonth', (monthName) => {

    cy.get('.ui-datepicker-month').then(($month) => {

        let currentMonth = new Date().getMonth + 1;
        let givenMonth = dateUtils.getMonthIndexFromName(monthName);

        if ($month.text().includes(monthName)) {
            cy.log(monthName, ' is selected');
            return
        } else {
            if (givenMonth > currentMonth) {
                cy.get('.ui-datepicker-next > .ui-icon').click()
            }
            else if (givenMonth > currentMonth) {
                cy.get('.ui-datepicker-prev > .ui-icon').click()
            }
        }

        cy.selectMonth(monthName)

    })

})