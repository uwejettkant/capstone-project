import React from 'react'
import { render } from '@testing-library/react'
import TaskList from './taskList'

test('rendering Task List', () => {
  const { getByText } = render(<TaskList />)
  const linkElement = getByText(/Eine kurze Info vorab/i)
  expect(linkElement).toBeInTheDocument()
})
