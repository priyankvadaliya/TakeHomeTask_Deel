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

Cypress.Commands.add("logon", (username, password) => {
    cy.visit("/");
    cy.get("input[name='email']").should("be.visible").type(username);
    cy.get("input[name='password']").should("be.visible").type(password);
    cy.get("button[type='submit']").should("be.visible").click();
});

Cypress.Commands.add("logout", () => {
    cy.get("[class='flex align-items-center justify-content-center w-100 icon']").should("be.visible").click();
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
});

///Funcation to Genrate Random Strings.
Cypress.Commands.add("generate_random_string", string_length => {
    let random_string = "";
    let random_ascii;
    for (let i = 0; i < string_length; i++) {
        random_ascii = Math.floor(Math.random() * 25 + 97);
        random_string += String.fromCharCode(random_ascii);
    }
    return random_string;
});


