import React from 'react'
import IndividualNotes from './IndividualNotes'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'IndividualNotes',
  title: 'IndividualNotes',
  decorators: [withMobileWrapper],
}

export const component = () => <IndividualNotes />
