describe('navigation within the app', () => {
  it('clicking guide icon navigates to respective url', () => {
    cy.visit('/')

    cy.get('[data-cy="guide_icon"]').click()
    cy.url().should('include', '/task/1')
  })

  it('clicking note icon navigates to respective url', () => {
    cy.visit('/')

    cy.get('[data-cy="note_icon"]').click()
    cy.url().should('include', '/individual-notes')
  })

  it('clicking create icon navigates to respective url', () => {
    cy.visit('/')

    cy.get('[data-cy="create_icon"]').click()
    cy.url().should('include', '/create-shipment')
  })

  it('clicking shipments icon navigates to respective url', () => {
    cy.visit('/')

    cy.get('[data-cy="shipments_icon"]').click()
    cy.url().should('include', '/my-shipments')
  })

  it('clicking create icon navigates back to the hoe screen', () => {
    cy.visit('/')
  })
})
