import React from 'react'
import { action } from '@storybook/addon-actions'
import GetNextTaskButton from './GetNextTaskButton'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'GetNextTaskButton',
  title: 'GetNextTaskButton',
  decorators: [withMobileWrapper],
}

export const isActive = () => (
  <GetNextTaskButton
    defaultText="I am active"
    onClick={action('button was clicked')}
  />
)
