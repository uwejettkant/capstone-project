import React from 'react'
import { render } from '@testing-library/react'
import NoteForm from './NoteForm'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<NoteForm />)
  const element = getByPlaceholderText(/max. 20 Zeichen/i)
  expect(element).toBeInTheDocument()
})
