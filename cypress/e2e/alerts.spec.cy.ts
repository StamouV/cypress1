

describe('Alerts' ,() => {


//1 javascript alert it will have some text and ok button
 it('test alert1', () => {
 cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
 cy.get('#content > div > ul > li:nth-child(1) > button').click();


});

});