import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))
