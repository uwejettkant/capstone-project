import React from 'react'
import NoteForm from './NoteForm'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: 'NoteForm',
  title: 'NoteForm',
  decorators: [withMobileWrapper],
}

export const inputField = () => <NoteForm />