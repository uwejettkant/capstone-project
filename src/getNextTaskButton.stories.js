import React from 'react'
import { action } from '@storybook/addon-actions'
import GetNextTaskButton from './getNextTaskButton'

export default {
  component: 'GetNextTaskButton',
  title: 'GetNextTaskButton',
}

export const simple = () => (
  <GetNextTaskButton onClick={action('handleClick')}>default</GetNextTaskButton>
)

export const isActive = () => (
  <GetNextTaskButton onClick={action('handleClick')} isActive>
    Done
  </GetNextTaskButton>
)
