import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import FirstTask from './FirstTask'

test('rendering FirstTast', () => {
  const { getByText } = render(<FirstTask />)
  const linkElement = getByText(/Finde dein Produkt/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering Todo', () => {
  const container = document.createElement('section')
  ReactDOM.render(<FirstTask>todo</FirstTask>, container)
  expect(container.textContent).toBe(
    'Finde dein ProduktUm dir den Einstieg zu erleichtern, klicke bitte auf den Button Alibaba. Du wirst auf die größte asiatische Handelsplattform Alibaba.com weitergeleitet.Alibaba'
  )
})
