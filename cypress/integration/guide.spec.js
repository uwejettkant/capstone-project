describe('testing the guide buttons', () => {
  it('is clicking the buttons to navigate within the guide', () => {
    cy.visit('/task/1')
    cy.get('.btn-next').click()
  })
})
