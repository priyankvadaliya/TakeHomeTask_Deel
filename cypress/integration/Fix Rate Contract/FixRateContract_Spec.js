import CreatenewContract from "../../support/PageObjects/CreatenewContract";
describe("Create Fix Contract", () => {

    beforeEach(() => {
        cy.logon(Cypress.env("DefaultUser"), Cypress.env("DefaultPassword"));
    });
    afterEach(() => {
        cy.logout();
    });
    it("Verify the User can Fixed Rate Contract", () => {
    const createAContract = new CreatenewContract();

    cy.xpath(createAContract.CreateNewContractLink).should("be.visible").click();

    //Verify the user now on Contract type Page
    cy.xpath(createAContract.COntractTypeHeading).should("be.visible");
    
    cy.xpath(createAContract.FixedRateBanner).should("be.visible").click();

    ///Creating a fixed contract related input fields
    cy.generate_random_string(10).then(result => {
        cy.xpath(createAContract.ContractName).should("be.visible").type(result);
        cy.xpath(createAContract.Contractortaxresidence).should("be.visible").type('algeria{enter}');
        cy.xpath(createAContract.JobTitle).should("be.visible").type('Manitoba{enter}');
        cy.xpath(createAContract.Senioritylevel).should("be.visible").type('Not Applicable{enter}');
        cy.xpath(createAContract.ScopeofWork).should("be.visible").type(result);
    })
    cy.xpath(createAContract.NextBtn).should("be.visible").click();

    cy.xpath(createAContract.Currency).should("be.visible").type('GBP - British Pound{enter}');
    cy.xpath(createAContract.Rate).should("be.visible").type(1000);
    cy.xpath(createAContract.PaymentFequence).should("be.visible").type('Weekly{enter}');
    cy.xpath(createAContract.NextBtn).should("be.visible").click();
    cy.xpath(createAContract.NextBtn).should("be.visible").click();
    cy.xpath(createAContract.Addaspecialclause).should("be.visible").click();

    // adding Random Comment
    cy.generate_random_string(40).then(result => {
        cy.xpath(createAContract.SpecialClauseTextArea).should("be.visible").type(result);
    })
    cy.xpath(createAContract.NextBtn).should("be.visible").click();
    cy.xpath(createAContract.Createcontract).should("be.visible").click();
    cy.xpath(createAContract.Reviewandsign).should("be.visible");    
    
    });
});