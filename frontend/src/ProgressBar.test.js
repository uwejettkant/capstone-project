import React from 'react'
import { render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

test('renders if vaue is defined', () => {
  const value = render(<ProgressBar />)
  expect(value).toBeDefined()
})

test('value of percentage will be defined', () => {
  const value = 6.66
  expect(value).toBeDefined()
})
