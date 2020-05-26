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
    'Dein Step By Step Import GuideStarte noch heute!'
  )
})
