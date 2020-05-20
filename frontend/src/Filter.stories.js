import React from 'react'
import Filter from './Filter'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'Filter',
  title: 'Filter',
  decorators: [withMobileWrapper],
}

export const component = () => <Filter />
