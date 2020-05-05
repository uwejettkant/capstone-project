import React from 'react'
import { action } from '@storybook/addon-actions'
import GetNextTaskButton from './GetNextTaskButton'

export default {
  component: 'GetNextTaskButton',
  title: 'GetNextTaskButton',
}

export const simple = () => (
  <GetNextTaskButton defaultText="default" onClick={action('default')} />
)

export const isActive = () => (
  <GetNextTaskButton
    activeText="I am active"
    onClick={action('button was clicked')}
    isActive
  />
)
