import React from 'react'
import MyShipments from './MyShipments'
import withMobileWrapper from '../../.storybook/preview'

export default {
  component: 'MyShipments',
  title: 'MyShipments',
  decorators: [withMobileWrapper],
}

export const component = () => <MyShipments />
