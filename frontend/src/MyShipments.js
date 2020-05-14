import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Pallets from './images/pallets.jpg'

export default function MyShipments() {
  const [shipment, setShipment] = useState([
    {
      Bl: 'XZZ3527',
      Palettenanzahl: 2,
      Lieferant: 'Saftpressenwerk',
      Warenbeschreibung: 'Saftpresse',
      etd: '25.04.19',
      eta: '30.05.19',
    },
  ])

  function addShipment(input) {
    const newShipment = [...shipment, { input }]
    setShipment(newShipment)
  }

  //   function deleteShipment(index) {
  //     const newShipment = [...shipment]
  //     newShipment.splice(index, 1)
  //     setShipment(newShipment)
  //   }

  return (
    <main>
      <Wrapper>
        {shipment.map((shipment) => (
          <ShipmentCard key="id" addShipment={addShipment}>
            <Imagewrapper>
              <img src={Pallets} alt="pallets" />
            </Imagewrapper>
            <DataWrapper>
              <p>BL Nr: {shipment.Bl}</p>
              <p>Palettenanzahl: {shipment.Palettenanzahl}</p>
              <p>Lieferant: {shipment.Warenbeschreibung}</p>
              <p>etd: {shipment.etd}</p>
              <p>eta: {shipment.eta}</p>
            </DataWrapper>
          </ShipmentCard>
        ))}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  border-radius: 5px;
  padding: 5px;
  max-width: 400px;
  margin-top: 2em;
  padding-top: 1em;

  p {
    background: #fff;
  }
`

const ShipmentCard = styled.section`
  background: #fff;
  color: #214159;
  width: 300px;
  margin: 0 auto;
  border-radius: 25px;
`
const Imagewrapper = styled.div`
  height: 30%;
  border-radius: 25px 25px 0 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`

const DataWrapper = styled.section`
  padding: 1em;
  font-weight: bold;
  font-size: 1.15em;
`
