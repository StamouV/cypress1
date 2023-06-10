import LandingPage from "../pages/landingPage";
import { BddStep } from '../support/log_commands';


//test commit
describe('Landing Page', () => {
    const landingPage = new LandingPage();

    beforeEach(()=>{
        cy.logStep(BddStep.GIVEN, 'Opening base url');
        landingPage.open();
    });

    it('Verify landed', () => {
        cy.logStep(BddStep.THEN, 'Header Panel exists');
        landingPage.getHeaderPanel().should('exist');
    });

     it('Verify left panel ', () => {                       //added
        cy.logStep(BddStep.THEN, 'left panel exists');      //added
        landingPage.getLeftPanel().should('exist');         //added
    });




     it('Test login -wrong username and password ', () => {                       //added
       cy.logStep(BddStep.THEN, 'login failed  '); //added
                cy.get("input[name=username]").type("username"); //added
                cy.get("input[name=password]").type("password"); //added
                cy.get(":nth-child(5) > .button").click(); //added
                cy.get("#rightPanel > p").should("contain.text","An internal error has occurred and has been logged");
              
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
        cy.get('#rightPanel > :nth-child(3)').should("contain.text","A Customer Care Representative will be contacting you" );

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