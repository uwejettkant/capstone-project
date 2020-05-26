import React from 'react'
import Footer from './Footer'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'Footer',
  title: 'Footer',
  decorators: [withMobileWrapper],
}

export const footer = () => <Footer />

