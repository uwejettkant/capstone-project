describe('create an shipment', () => {
  it('submits the form correctly when inputs are filled', () => {
    cy.visit('/create-shipment')
    cy.get('input[name="Bl"]').type('XXXX1111333')
    cy.get('input[name="Palettenanzahl"]').type('10')
    cy.get('input[name="Lieferant"]').type('cypress')
    cy.get('input[name="Warenbeschreibung"]').type('dummydata')
    cy.get('input[name="etd"]').type('2020-05-01')
    cy.get('input[name="eta"]').type('2020-06-01')
    cy.get('[data-cy=create_shipment]').submit()
  })

  it('a new shipment is added', () => {
    cy.visit('/my-shipments')
    cy.contains('XXXX1111333').should('exist')
  })
})
