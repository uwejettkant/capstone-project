import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

test('renders app name', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const linkElement = getByText(/Dein Step By Step Import Guide/i)
  expect(linkElement).toBeInTheDocument()
})
