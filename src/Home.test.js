import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

test('render all Text of the component', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe(
    'Schritt für Schritt AnleitungMeine NotizenErstelle Dein ShipmentDeine Seefracht Sendungen'
  )
})

test('render text of one button', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(getByText('Schritt für Schritt Anleitung')).toBeInTheDocument()
})
