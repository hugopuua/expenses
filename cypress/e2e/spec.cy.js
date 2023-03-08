describe('Expenses List', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("Can find an element", () => {
        cy.get(".expense-item").should('have.length', 1)

    })

    it('adds a new expense', () => {
        const expense = {
            title: 'Tossud',
            amount: 99.99,
            date: '2023-03-08'
        }

        cy.contains('Add New Expense').click()
        cy.get('form input[type="text"]')
            .type("Tossud")
        cy.get('form input[type="number"]')
            .type("99.99")
        cy.get('form input[type="date"]')
            .type("2023-03-08")
    })
    it('adds a new expense', () => {
        const expense2 = {
            title: 'Püksid',
            amount: 10,
            date: '2024-08-03'
        }
        cy.contains('Add New Expense').click()
        cy.get('form input[type="text"]')
            .type("Püksid")
        cy.get('form input[type="number"]')
            .type("10")
        cy.get('form input[type="date"]')
            .type("2024-08-03")
        cy.get('button[type="submit"]').click()
    })
    it('adds a new expense', () => {
        const expense3 = {
            title: 'Särk',
            amount: 15,
            date: '2024-03-03'
        }

        cy.contains('Add New Expense').click()
        cy.get('form input[type="text"]')
            .type("Särk")
        cy.get('form input[type="number"]')
            .type("15")
        cy.get('form input[type="date"]')
            .type("2024-03-03")
        cy.get('button[type="submit"]').click()

        cy.get(".expense-item").should("have.length", 1)
    })

    it('Could filter elements', () => {
        cy.get(".expenses-filter select").select(1)
        cy.get(".expense-item").should("have.length", 2)
    })
})