import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import FirstTask from './FirstTask'

test('rendering headline Text', () => {
  const { getByText } = render(<FirstTask />)
  const linkElement = getByText(/Finde dein Produkt/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering component Text', () => {
  const container = document.createElement('section')
  ReactDOM.render(<FirstTask>text</FirstTask>, container)
  expect(container.textContent).toBe(
    'Finde dein ProduktUm dir den Einstieg zu erleichtern, klicke bitte auf den Button Alibaba. Du wirst auf die größte asiatische Handelsplattform Alibaba.com weitergeleitet.Alibaba'
  )
})

test('rendering button component text', () => {
  const { getByText } = render(<FirstTask />)
  const linkElement = getByText(/Zum Nächsten Schritt/i)
  expect(linkElement).toBeInTheDocument()
})
