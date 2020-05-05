import React from 'react'
import FirstTask from './FirstTask'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  component: FirstTask,
  title: 'FirstTask',
}

export const firstTask = () => {
  return (
    <Router>
      <FirstTask />
    </Router>
  )
}
