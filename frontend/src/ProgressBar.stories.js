import React from 'react'
import ProgressBar from './ProgressBar'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'ProgressBar',
  title: 'ProgressBar',
  decorators: [withMobileWrapper],
}

export const progressLine = () => <ProgressBar />