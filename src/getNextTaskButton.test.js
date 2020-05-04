import React from 'react'
import { render } from '@testing-library/react'
import TaskList from './TaskList'

test('rendering Task List', () => {
  const { getByText } = render(<TaskList />)
  const linkElement = getByText(/Eine kurze Info vorab/i)
  expect(linkElement).toBeInTheDocument()
})
