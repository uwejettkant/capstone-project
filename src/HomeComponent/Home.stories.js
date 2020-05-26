import React from 'react'
import Home from './Home'
import withMobileWrapper from '../../.storybook/preview'

export default {
  component: 'Home',
  title: 'Home',
  decorators: [withMobileWrapper],
}

export const homepage = () => <Home />
