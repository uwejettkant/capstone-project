import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import { MemoryRouter } from 'react-router-dom'

test('renders Text in Footer', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe('')
})
