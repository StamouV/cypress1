
export enum BddStep {
    GIVEN = 'GIVEN',
    WHEN = 'WHEN',
    THEN = 'THEN',
    AND = 'AND',
    EXPECT = 'EXPECT',
}

Cypress.Commands.add('logStep', (bddStep: BddStep, text: string) => {
    Cypress.log({
        name: bddStep,
        message: text,
    });
});

