describe('Sick Trick Wish List', () => {
	it('should display a title on load', () => {
		cy.visit('http://localhost:3000/').get('.title').should('be.visible')
	})

	it('should display a form with inputs', () => {
		cy.visit('http://localhost:3000/')
		cy.get('form')
		cy.get('input').should('be.visible')
	})

	it('should show a card with a trick name', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.tricks-container')
		cy.get('.card')
		cy.get('h3').should('be.visible')
	})
	it('should show a card with a trick obstacle', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.tricks-container')
		cy.get('.card')
		cy.get('.obstacle').should('be.visible')
	})
	it('should show a card with a trick stance', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.tricks-container')
		cy.get('.card')
		cy.get('.stance').should('be.visible')
	})
	it('should show a tutorial link', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.tricks-container')
		cy.get('.card')
		cy.get('.tutorial-link')
	})

	it('should be able to type the trick name in the form', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App')
		cy.get('form')
		cy.get('.name').type('The coolest trick')
		cy.get('.name').should('have.value', 'The coolest trick')
	})

	it('should be able to type the trick name in the form', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App')
		cy.get('form')
		cy.get('.tutorial').type('www.YouTube.com/cool-trick')
		cy.get('.tutorial').should('have.value', 'www.YouTube.com/cool-trick')
	})

	it('should be able to select a stance in the form', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App')
		cy.get('form')
		cy.get('#stance').select('Switch')
	})

	it('should be able to select an obstacle in the form', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App')
		cy.get('form')
		cy.get('#obstacle').select('Ledge')
	})

	it('should be able to add a new trick', () => {
		cy.visit('http://localhost:3000/')
		cy.get('form')
		cy.get('.name').type('cool trick')
		cy.get('.tutorial').type('www.YouTube.com/cool-trick')
		cy.get('#obstacle').select('Pool')
		cy.get('#stance').select('Switch')
		cy.get('form').submit()
	})

	it('should clear out inputs after form submission', () => {
		cy.visit('http://localhost:3000/')
		cy.get('form')
		cy.get('.name').type('another cool trick')
		cy.get('.tutorial').type('www.YouTube.com/cool-trick')
		cy.get('button').click()
		cy.get('.name').should('be.empty')
	})

	// it('should have a new card after submission', () => {
	// 	cy.get('.App')
	// 	cy.get('.tricks-container')
	// 	cy.get('.card').get('h3').should('have.value', 'another cool trick')
	// })
})
