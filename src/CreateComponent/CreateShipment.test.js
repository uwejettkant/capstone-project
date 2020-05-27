import React from 'react'
import { render } from '@testing-library/react'
import CreateShipment from './CreateShipment'

test('renders Placeholder first input', () => {
  const { getByPlaceholderText } = render(<CreateShipment />)
  const element = getByPlaceholderText(/BL Nr./i)
  expect(element).toBeInTheDocument()
})

test('renders Placeholder last input', () => {
  const { getByPlaceholderText } = render(<CreateShipment />)
  const element = getByPlaceholderText(/Warenbeschreibung/i)
  expect(element).toBeInTheDocument()
})
