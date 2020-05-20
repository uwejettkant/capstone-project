import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import TaskList from './TaskList'
import { MemoryRouter, Route } from 'react-router-dom'

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
  expect(container.textContent).toBe('')
})
