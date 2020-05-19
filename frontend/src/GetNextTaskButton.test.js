import React from 'react'
import { render } from '@testing-library/react'
import GetNextTaskButton from './GetNextTaskButton'

// test('render button default text', () => {
//   const { getByText } = render(<GetNextTaskButton />)
//   expect(getByText('Zum Nächsten Schritt')).toBeInTheDocument()
// })

test('render text of one button', ({ defaultText }) => {
  const { getByText } = render(
    <GetNextTaskButton defaultText={defaultText}>
      {defaultText}
    </GetNextTaskButton>
  )
  expect(getByText('Zum Nächsten Schritt')).toBeInTheDocument()
})
