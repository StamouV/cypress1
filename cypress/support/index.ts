/// <reference types="cypress" />

import {BddStep} from "./log_commands";

declare namespace Cypress {
    interface Chainable {

        /**
         * Logs a BDD step in mochawesome reports
         * @param bddStep: the step label
         * @param text: the step text
         */
        logStep(bddStep: BddStep, text: string): Chainable;
    }
}
