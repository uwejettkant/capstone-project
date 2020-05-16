import React from 'react'
import styled from 'styled-components/macro'
import Pallets from './images/pallets.jpg'

export default function MyShipments({ shipment, deleteShipment }) {
  return (
    <main>
      <Wrapper>
        {shipment.map((shipment, index) => (
          <CardContainer key={index} index={index} shipment={shipment}>
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
            <ButtonWrapper>
              <DeleteButton onClick={() => deleteShipment(deleteShipment)}>
                Löschen
              </DeleteButton>
            </ButtonWrapper>
          </CardContainer>
        ))}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  border-radius: 5px;
  padding: 5px;
  max-width: 400px;
  margin-top: 1em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.section`
  background: #fff;
  color: #214159;
  width: 300px;
  margin-bottom: 4em;
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

const DeleteButton = styled.button`
  border: none;
  padding: 0.75em;
  font-size: 1rem;
  border: none;
  margin-right: 1em;
  border-radius: 5px;
  background: #8eb8fa;
  color: #fff;
  align-items: center;
`

const ButtonWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
`
