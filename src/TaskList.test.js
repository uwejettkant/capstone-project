import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import TaskList from './TaskList'

test('rendering headline Text', () => {
  const { getByText } = render(<TaskList />)
  const linkElement = getByText(/Eine kurze Info vorab/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering component Text', () => {
  const container = document.createElement('section')
  ReactDOM.render(<TaskList>todo</TaskList>, container)
  expect(container.textContent).toBe(
    'Eine kurze Info vorabDie folgende Schritt für Schritt Anleitung ist ein Leitfaden, anhand dessen Ihr die wichtigsten Schritte eines Importes durchlaufen könnt. Es empfiehlt sich den unten verlinkten Guide durchzuarbeiten um die Aufgaben bewältigen zu können. Natürlich könnt Ihr auch anderweitig zu jeder Aufgabe recherchieren aber das Buch ist eine Gute Grundlage. Sinn und Zweck dieser App ist es Euch eine Checkliste für den Import physischer Produkte an die Hand zu geben.Hol dir dein BuchStarte Deinen Guide'
  )
})

test('rendering button component text', () => {
  const { getByText } = render(<TaskList />)
  const linkElement = getByText(/Starte Deinen Guide/i)
  expect(linkElement).toBeInTheDocument()
})
