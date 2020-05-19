import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

test('render Text in Header', () => {
  const container = document.createElement('div')
  ReactDOM.render(<Header />, container)
  expect(container.textContent).toBe('Import Ganz Einfach')
})
