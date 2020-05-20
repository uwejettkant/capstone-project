import React from 'react'
import { render } from '@testing-library/react'
import GetNextTaskButton from './GetNextTaskButton'

test('renders Text in GetNextTaskButton', () => {
  const { getByText } = render(
    <GetNextTaskButton
      defaultText="Zum Nächsten Schritt"
      onClick={() => getByText()}
    />
  )
  const buttonText = getByText(/Zum Nächsten Schritt/i)
  expect(buttonText).toBeInTheDocument()
})
