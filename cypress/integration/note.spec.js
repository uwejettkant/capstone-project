describe('create an shipment', () => {
  it('submits the form correctly when inputs are filled', () => {
    cy.visit('/individual-notes')
    cy.get('input[id="note"]').type('testEvent')
    cy.get('[data-cy=create_note]').submit()
    cy.contains('testEvent').should('exist')
  })
})
