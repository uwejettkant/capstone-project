import React from 'react'
import { render } from '@testing-library/react'
import IndividualNotes from './IndividualNotes'
import { MemoryRouter } from 'react-router-dom'

test('render headline Text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <IndividualNotes />
    </MemoryRouter>
  )
  expect(getByText(/Deine Notiz/i)).toBeInTheDocument()
})
