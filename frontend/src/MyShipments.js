import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Pallets from './images/pallets.jpg'
import { db } from './firebase'
import swal from 'sweetalert'

export default function MyShipments() {
  const [shipment, setShipment] = useState([])

  useEffect(() => {
    db.collection('my-shipments').onSnapshot((snapshot) => {
      const getShipments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setShipment(getShipments)
    })
  }, [])

  function deleteShipment(shipment) {
    swal({
      title: 'Bist du dir sicher?',
      text:
        'Wenn die Daten gelöscht sind, können sie nicht wieder hergestellt werden.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('my-shipments')
          .doc(shipment.id)
          .delete()
          .then(
            swal('Ok. Deine Sendung wurde gelöscht!', {
              icon: 'success',
            })
          )
          .catch((error) =>
            alert(
              'Oops etwas ist schief gelaufen. Bitte versuche es später noch einmal.',
              error
            )
          )
      } else {
        swal('Löschvorgang Abgebrochen')
      }
    })
  }
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
              <DeleteButton onClick={() => deleteShipment(shipment)}>
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
