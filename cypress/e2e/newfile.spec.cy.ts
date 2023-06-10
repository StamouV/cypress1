

describe ('my first test ',() => {
    it ('test1',() => {
     cy.visit("https://parabank.parasoft.com/parabank/about.htm" );
      cy.url().should('include','parabank');
      cy.url().should('eq','https://parabank.parasoft.com/parabank/about.htm');
      cy.url().should('contain','parabank');

      cy.url().should('include','parabank')
              .and('eq','https://parabank.parasoft.com/parabank/about.htm')
              .and('contain','parabank');

          cy.title().should('include','ParaBank | About Us')
            .and('eq','ParaBank | About Us')
            .and('contain','Us');

          cy.get('.logo').should('be.visible');
           cy.get('input[name=username]').type('username');
           cy.get('input[name=password]').type('password');
           cy.get('#loginPanel > form > div:nth-child(5) > input').click();


           //on explicit assertions we create functions
           let expMessage='The username and password could not be verified.';
           cy.get('.error').then( (erMessage) =>{
               let actMessage=erMessage.text();
               expect('actMessage').to.equal('expMessage');
              // expect('actMessage').to.not.equal('expMessage');
           //TDD Style
           assert.equal(actMessage,expMessage);
          // assert.notEqual(actMessage,expMessage);

           });



     });

});
