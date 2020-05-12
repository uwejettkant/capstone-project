import React from 'react'
import Header from './Header'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'Header',
  title: 'Header',
  decorators: [withMobileWrapper],
}

export const header = () => <Header />