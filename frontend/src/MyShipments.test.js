import React from 'react'
import { render } from '@testing-library/react'
import MyShipments from './MyShipments'
import { MemoryRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<MyShipments />)
  const element = getByPlaceholderText(/Search.../i)
  expect(element).toBeInTheDocument()
})

test('rendering component Text', () => {
  const container = document.createElement('section')
  ReactDOM.render(
    <MemoryRouter>
      <Route path="/my-shipments">
        <MyShipments />
      </Route>
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe('')
})
