/*
 ========  Requirments  ========
 A button comoponent that has 2 variations (primary and secondary) and 
 3 different sizes (small, medium, large). The primary variations should consist of different styles.
 As it's a button, a click handler is required.
 Don't forget accessibility being an NFR.
*/

import Button  from './Button'
import chaiColors from "chai-colors"

chai.use(chaiColors)

beforeEach(() => {
    cy.injectAxe()
})

describe('<Button />', () => {
    describe('Variant', () => {
        it('renders primary variant', () => {
            // **Arrange**
            // Mounting the primary variant component
            cy.mount(<Button variant='primary' text='Click Me'/>)
        
            // **Act**
            // Not needed for this test
        
            // **Assert**
            // Class name includes the variant value
            cy.get("Button").invoke("attr", "class").should("contain", "primary")

            // Button is styled per the variant designs
            cy.get("Button").should("have.css", "background-color").and("be.colored", "#2e7d32")
            cy.get("Button").should("have.css", "color").and("be.colored", "#fff")
            cy.get("Button").should("have.css", "border-color").and("be.colored", "#2e7d32")

            // Accessibility check on rendered variant
            cy.checkA11y("Button")
        })
        it('renders secondary variant', () => {
            cy.mount(<Button variant='secondary' text='Click Me'/>)

            cy.get("Button").invoke("attr", "class").should("contain", "secondary")
            cy.get("Button").should("have.css", "background-color").and("be.colored", "#fff")
            cy.get("Button").should("have.css", "color").and("be.colored", "#2e7d32")
            cy.get("Button").should("have.css", "border-color").and("be.colored", "#2e7d32")

            cy.checkA11y("Button")
        })
    })
    describe('Size', () => {
        it('renders small size', () => {
            cy.mount(<Button size='small' variant='primary' text='Click Me'/>)

            cy.get("Button").invoke("attr", "class").should("contain", "small")
            cy.get("Button").should("have.css", "padding").and("be.equal", "4px 8px")
            cy.get("Button").should("have.css", "font-size").and("be.equal", "12.8px")

            cy.checkA11y("Button")
        })
        it('renders medium size', () => {
            cy.mount(<Button size='medium' variant='primary' text='Click Me'/>)

            cy.get("Button").invoke("attr", "class").should("contain", "medium")
            cy.get("Button").should("have.css", "padding").and("be.equal", "8px 16px")
            cy.get("Button").should("have.css", "font-size").and("be.equal", "16px")

            cy.checkA11y("Button")
        })
        it('renders large size', () => {
            cy.mount(<Button size='large' variant='primary' text='Click Me'/>)

            cy.get("Button").invoke("attr", "class").should("contain", "large")
            cy.get("Button").should("have.css", "padding").and("be.equal", "12px 24px")
            cy.get("Button").should("have.css", "font-size").and("be.equal", "19.2px")

            cy.checkA11y("Button")
        })
    })
    describe('onClick', () => {
        it('event triggers on click', () => {
            const clickSpy = cy.spy().as("clickSpy")
            cy.mount(<Button onClick={clickSpy} variant='primary' text='Click Me'/>)

            cy.get("Button").click()

            cy.get("@clickSpy").should("have.been.called")
        })
    })
})