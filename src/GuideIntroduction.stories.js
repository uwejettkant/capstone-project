import React from 'react'
import GuideIntroduction from './GuideIntroduction'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  component: GuideIntroduction,
  title: 'GuideIntroduction',
}

export const introduction = () => {
  return (
    <Router>
      <GuideIntroduction />
    </Router>
  )
}
