import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import TaskList from './TaskList'
import { MemoryRouter, Route } from 'react-router-dom'

/*test('render headline Text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <TaskList match={{ params: { id: 1 } }} />
    </MemoryRouter>
  )
  expect(getByText(/Eine kurze info vorab/i)).toBeInTheDocument()
})
*/
test('rendering component Text', () => {
  const container = document.createElement('section')
  ReactDOM.render(
    <MemoryRouter initialEntries={['/task/1']}>
      <Route path="/task/:taskId">
        <TaskList />
      </Route>
    </MemoryRouter>,
    container
  )
  expect(container.textContent).toBe(
    'Eine kurze Info vorabDie folgende Schritt für Schritt Anleitung ist ein Leitfaden, anhand dessen Ihr die wichtigsten Schritte eines Importes durchlaufen könnt. Es empfiehlt sich den unten verlinkten Guide durchzuarbeiten um die Aufgaben bewältigen zu können. Natürlich könnt Ihr auch anderweitig zu jeder Aufgabe recherchieren aber das Buch ist eine Gute Grundlage. Sinn und Zweck dieser App ist es Euch eine Checkliste für den Import physischer Produkte an die Hand zu geben.Hol dir dein BuchStarte Deinen Guide'
  )
})

/*test('rendering button component text', () => {
  const { getByText } = render(
    <MemoryRouter>
      <TaskList match={{ params: { id: 1 } }} />
    </MemoryRouter>
  )
  const linkElement = getByText(/Zum Nächsten Schritt/i)
  expect(linkElement).toBeInTheDocument()
  // expect(getByText(/Zum Nächsten Schritt/i)).toBeInTheDocument()
})
*/

it('renders link correctly', () => {
  const tree = render
    .create(
      <MemoryRouter>
        <Route>
          <TaskList page="https://www.amazon.de/dp/B07V65RGDV">
            Hol Dir Dein Buch
          </TaskList>
        </Route>
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
