
//video - > https://www.youtube.com/watch?v=xb7yP_rgbM4
/* before  runs once before all tests
before each runs before each test
after  runs once after all tests
after each  runs after each test
*/
describe('hooks test', () => {

before (() => {
  cy.log('before all');

});

beforeEach(() => {

         cy.visit("https://parabank.parasoft.com/parabank/about.htm" );


});

afterEach(() => {
cy.log('after each ');
});

after(() => {
cy.log('after all once ');
});


    it ( "test  1 " , () => {
         cy.get('.logo').should('be.visible');
      });

    it ('test 2' , () => {
         cy.get('.logo').should('be.visible');

    });

});