import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/GlobalStyles'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator(withInfo)

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))
