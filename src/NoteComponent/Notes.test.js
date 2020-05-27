import React from 'react'
import { render } from '@testing-library/react'
import Notes from './Notes'

test('render button delete text', () => {
  const notes = { isCompleted: false, value: '' }
  const { getByText } = render(<Notes notes={notes} />)
  expect(getByText('')).toBeInTheDocument()
})
