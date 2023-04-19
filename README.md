# medium-cypress-tdd
Very basic react+vite application to compliment a medium article relating to unlocking the power of TDD with Cypress component testing and AI assisted development (ChatGPT). 


## Installation
1. Clone the repository
2. Run `yarn install` OR `npm install` to install the dependencies

## Running the component tests
### Cypress
When using yarn
- Run `yarn cypress:open` to run the tests in the Cypress Test Runner
- Run `yarn cypress:ci` to run the tests in the command line, headless in chrome


When using npm
- Run `npm run cypress:open` to run the tests in the Cypress Test Runner
- Run `npm run cypress:ci` to run the tests in the command line

## Component Tests
Component tests can be found within src/components/[component-name]/
