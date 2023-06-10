import { defineConfig } from 'cypress'

export default defineConfig({
  "e2e": {
    "baseUrl": 'https://parabank.parasoft.com/parabank',
    supportFile: 'cypress/support/index.ts',
    supportFolder: 'cypress/support',
  },})

