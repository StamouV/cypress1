describe ('Check UI Elements',() => {

it ('check radiobutton',()=> {
   cy.visit('https://parabank.parasoft.com/parabank/admin.htm');
   cy.get('#accessMode1').should('be.visible');
   cy.get('#accessMode3').should('be.visible');
   //selecting radio buttons
   cy.get('#accessMode1').check().should('be.checked');
    cy.get('#accessMode3').should('not.be.checked');


});
it ('check checkboxes ',()=> {
   cy.visit('https://parabank.parasoft.com/parabank/admin.htm');
  // cy.get('#checkbox').should('be.visible');
  //cy.get('#checkbox').check().should('be.checked');
  // cy.get('checkbox').uncheck().should('not.be.checked');
  //selecting all the checkboxes
  // cy.get('input.form-check-input[type='checkbox']').check().should('be.checked')
  // cy.get('input.form-check-input[type='checkbox']').uncheck().should('not.be.checked')


});





});