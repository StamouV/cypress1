import LandingPage from "../pages/landingPage";
import { BddStep } from '../support/log_commands';

//added comment to verify commit
describe('Landing Page', () => {
    const landingPage = new LandingPage();

    beforeEach(()=>{
        cy.logStep(BddStep.GIVEN, 'Opening base url');
        landingPage.open();
    });

     it('Verify Header Panel', () => {
        cy.logStep(BddStep.THEN, 'Header Panel exists');
        landingPage.getHeaderPanel().should('exist');
    });

    it('Verify Header Panel', () => {
        cy.logStep(BddStep.THEN, 'Header Panel exists');
        landingPage.getHeaderPanel().should('exist');
    });

     it('Verify left panel ', () => {
        cy.logStep(BddStep.THEN, 'Left panel exists');
        landingPage.getLeftPanel().should('exist');
    });

      it('Verify logo ', () => {
        cy.logStep(BddStep.THEN, 'Logo exists');
        landingPage.getLogo().should('exist');
    });

    it('Verify caption text ', () => {
            cy.logStep(BddStep.THEN, 'Caption text verified');
            landingPage.getCaption().should('contain','Experience the difference');
        });


     it('Test login -wrong username and password ', () => {
       cy.logStep(BddStep.THEN, 'login failed  ');
                landingPage.getUsernameInput().type('username');
                landingPage.getPasswordInput().type('password');
                //cy.get("input[name=password]").type("password");
                landingPage.getLoginButton().click();
                //cy.get(":nth-child(5) > .button").click();
                landingPage.getErrorMessage().should('contain','The username and password could not be verified.');
                //cy.get("#rightPanel > p").should("contain.text","The username and password could not be verified.");
        });

      it ('test contact form ', () => {
        cy.logStep(BddStep.THEN, 'contact form submitted ');      //added
        cy.get (".contact > a") .click();
        cy.get("#name").type("test name ");
        cy.get ("#email").type ("test email") ;
        cy.get("#phone")  .type("123123");
        cy.get("#message").type("test message") ;
        cy.get("#contactForm > table > tbody > tr:nth-child(5) > td:nth-child(2) > input").click();

        //verify success message
        cy.get('#rightPanel > :nth-child(3)').should("contain","A Customer Care Representative will be contacting you" );

      });






       /* locators practice    -css selectors
         1. class locator .class
         2. id locator    #id
         3. [type='text']
         4. use class and attribute
            .input[name='username']

         how to get selector
         inspect -rightclick -> copy selector
         cro path extension
         cypress -open selector playground
          */

     it('practice locators ', () => {                       //added

                cy.get(".home");
                cy.get(".input ");
                cy.get("#rightPanel");
        });


    it('Select Solutions list item', ()=>{
        cy.logStep(BddStep.WHEN, 'Selecting About Us from Solutions list');
        landingPage.selectSolutionsListItem(1);

        cy.logStep(BddStep.THEN, 'About Us paragraph content is visible');
        landingPage.getAbouUsContent().should('contain', 'ParaBank is a demo site')
    });

    it('practice assertions 1'), ()=> {
       // cy.visit("https://parabank.parasoft.com/parabank/" );

        cy.url().should('include','parabank');
        cy.url().should('eq','https://parabank.parasoft.com/parabank/');
        cy.url().should('contain','parabank');

        cy.url().should('include','parabank')
        .and('eq','https://parabank.parasoft.com/parabank/')
        .and('contain','parabank');

        cy.title().should('include','ParaBank | About Us')
        .and('eq','ParaBank | About Us')
        .and('contain','Us');

        //check web elements / logo is visible

       // cy.get('').should('be.visible')
      //  .and('exist');

    };




});