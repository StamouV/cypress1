class List {
    public ulLocator: string | Cypress.Chainable;

    constructor(ulLocator: string | Cypress.Chainable) {
        this.ulLocator = ulLocator;
    }

    public selectListItemByText(itemText: string) {
        return cy.get(`${this.ulLocator} li`).should('have.text', `${itemText}`).click();
    }

    public selectListItemByIndex(itemIndex: number) {
        return cy.get(`${this.ulLocator} li:eq(${itemIndex})`).click();
    }

    public selectListItem(itemTextOrIndex: string | number) {
        return typeof itemTextOrIndex === 'string'
            ? this.selectListItemByText(itemTextOrIndex)
            : this.selectListItemByIndex(itemTextOrIndex);
    }
}

export default List;