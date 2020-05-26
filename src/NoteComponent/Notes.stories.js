import React from 'react'
import Notes from './Notes'
import withMobileWrapper from '../../.storybook/preview'

export default {
  component: 'Notes',
  title: 'Notes',
  decorators: [withMobileWrapper],
}

export const buttons = () => <Notes />
