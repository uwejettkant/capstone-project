import React from 'react'
import { render } from '@testing-library/react'
import Filter from './Filter'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<Filter />)
  const element = getByPlaceholderText(/Search.../i)
  expect(element).toBeInTheDocument()
})
