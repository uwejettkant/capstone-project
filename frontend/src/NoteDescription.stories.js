import React from 'react'
import NoteDescription from './NoteDescription'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'NoteDescription',
  title: 'NoteDescription',
  decorators: [withMobileWrapper],
}

export const buttons = () => <NoteDescription notice />


