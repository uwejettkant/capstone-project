import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../firebase'
import swal from 'sweetalert'

export default function CreateShipment() {
  const [shipmentData, setShipmentData] = useState({
    Bl: '',
    Palettenanzahl: '',
    Lieferant: '',
    Warenbeschreibung: '',
    etd: '',
    eta: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    db.collection('my-shipments')
      .add(shipmentData)
      .then(() => console.log('New event added'))
      .catch((error) =>
        alert(
          'Oops, etwas ist schief gelaufen. Bitte versuche es später erneut.',
          error
        )
      )
    setShipmentData({
      Bl: '',
      Palettenanzahl: '',
      Lieferant: '',
      Warenbeschreibung: '',
      etd: '',
      eta: '',
    })
    swal({
      title: 'Deine Daten wurden erfolgreich refasst!',
      text: 'Gehe zu "Meine Seefracht", um deine Sendung zu sehen!',
      icon: 'success',
    })
  }

  return (
    <main>
      <BackgroundWrapperTop>
        <h3>Erstelle Dein Shipment</h3>
      </BackgroundWrapperTop>
      <InputWrapper>
        <FormStyled onSubmit={handleSubmit} data-cy="create_shipment">
          <LabelStyled htmlFor="Bl">Bl Nr.:</LabelStyled>
          <InputStyled
            id="Bl"
            name="Bl"
            type="text"
            value={shipmentData.Bl}
            onChange={updateEntry}
            placeholder="Bl Nr."
            maxLength="15"
            required
          />

          <LabelStyled htmlFor="Palettenanzahl">Palettenanzahl:</LabelStyled>
          <InputStyled
            id="Palettenanzahl"
            name="Palettenanzahl"
            type="number"
            value={shipmentData.Palettenanzahl}
            onChange={updateEntry}
            placeholder="Palettenanzahl"
            maxLength="15"
            required
          />

          <LabelStyled htmlFor="Lieferant">Lieferant:</LabelStyled>
          <InputStyled
            id="Lieferant"
            name="Lieferant"
            type="text"
            value={shipmentData.Lieferant}
            onChange={updateEntry}
            placeholder="Lieferant"
            maxLength="15"
            required
          />

          <LabelStyled htmlFor="Warenbeschreibung">
            Warenbeschreibung:
          </LabelStyled>
          <InputStyled
            id="Warenbeschreibung"
            name="Warenbeschreibung"
            type="text"
            value={shipmentData.Warenbeschreibung}
            onChange={updateEntry}
            placeholder="Warenbeschreibung"
            maxLength="15"
            required
          />
          <DateWrapper>
            <LabelDate htmlFor="etd">Schiffabfahrt Ursprungsland:</LabelDate>
            <InputDate
              id="etd"
              name="etd"
              type="date"
              value={shipmentData.etd}
              onChange={updateEntry}
              required
            />

            <LabelDate htmlFor="eta">Schiffsankunft Hamburg:</LabelDate>
            <InputDate
              id="eta"
              name="eta"
              type="date"
              value={shipmentData.eta}
              onChange={updateEntry}
              required
            />
          </DateWrapper>
          <InputButton type="submit">Daten Übermitteln</InputButton>
        </FormStyled>
      </InputWrapper>
    </main>
  )
  function updateEntry(e) {
    setShipmentData({ ...shipmentData, [e.target.name]: e.target.value })
  }
}

const BackgroundWrapperTop = styled.div`
  width: 375px;
  height: 359px;
  background-image: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);

  h3 {
    color: var(--blured-blue);
    text-align: center;
    margin: 0;
    padding-top: 0.5em;
  }
`

const InputWrapper = styled.section`
  width: 325px;
  height: 475px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0.5);
  background-color: #fff;
  overflow: scroll;
  position: fixed;
  top: 120px;
  left: 25px;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin-top: 0.5em;
`

const LabelStyled = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--dark-text);
  text-align: start;
  margin: 0.75em 0.25em 0.25em 1.5em;
  align-self: start;
`

const InputStyled = styled.input`
  width: 275px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #cdd5dd;
  background-color: #fff;
  margin: 0.25em;
`

const InputButton = styled.button`
  width: 275px;
  height: 40px;
  border-radius: 4px;
  background-color: #194cda;
  border: none;
  color: #fff;
  margin-top: 1em;
`

const DateWrapper = styled.div`
  width: 275px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const LabelDate = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--dark-text);
  text-align: start;
  margin-top: 1em;
  align-self: start;
  grid-row: 1/2;
  grid-gap: 1em;
`

const InputDate = styled.input`
  width: 137.5px;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #cdd5dd;
  background-color: #fff;
  grid-row: 2/4;
  margin-top: 0.25em;
`
