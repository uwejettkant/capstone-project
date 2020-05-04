import React from 'react'
import { action } from '@storybook/addon-actions'
import GetNextTaskButton from './GetNextTaskButton'

export default {
  component: 'GetNextTaskButton',
  title: 'GetNextTaskButton',
}

export const simple = () => (
  <GetNextTaskButton onClick={action('onClick')}>default</GetNextTaskButton>
)

export const isActive = () => (
  <GetNextTaskButton onClick={action('onClick')} isActive>
    Done
  </GetNextTaskButton>
)
