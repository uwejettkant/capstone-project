import React from 'react'
import CreateShipment from './CreateShipment'
import withMobileWrapper from '../../.storybook/preview'

export default {
  component: 'CreateShipment',
  title: 'CreateShipment',
  decorators: [withMobileWrapper],
}

export const component = () => <CreateShipment />
