import React from 'react'
import { render } from '@testing-library/react'
import NoteDescription from './NoteDescription'

test('render button done text', () => {
  const notes = { isCompleted: false, value: '' }
  const { getByText } = render(<NoteDescription notes={notes} />)

  expect(getByText('Erledigt')).toBeInTheDocument()
})

test('render button delete text', () => {
  const notes = { isCompleted: false, value: '' }
  const { getByText } = render(<NoteDescription notes={notes} />)
  expect(getByText('Löschen')).toBeInTheDocument()
})
