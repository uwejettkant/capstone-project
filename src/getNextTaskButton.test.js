import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import GetNextTaskButton from './GetNextTaskButton'

test('rendering button string', () => {
  const container = document.createElement('section')
  ReactDOM.render(<GetNextTaskButton>text</GetNextTaskButton>, container)
  expect(container.textContent).toBe('')
})

test('rendering button default text', () => {
  const { getByText } = render(
    <GetNextTaskButton defaultText="Starte Deinen Guide" />
  )
  const linkElement = getByText(/Starte Deinen Guide/i)
  expect(linkElement).toBeInTheDocument()
})
