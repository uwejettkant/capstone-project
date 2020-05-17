import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from './firebase'
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
      <Headline>Erfasse Deine Sendung</Headline>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled htmlFor="Bl">Bl Nr.:</LabelStyled>
        <InputStyled
          id="Bl"
          name="Bl"
          type="text"
          value={shipmentData.Bl}
          onChange={updateEntry}
          placeholder="Bl Nr."
          maxLength="40"
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
          maxLength="40"
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
          maxLength="40"
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
          maxLength="40"
          required
        />

        <LabelStyled htmlFor="etd">Schiffabfahrt Übersee:</LabelStyled>
        <InputStyled
          id="etd"
          name="etd"
          type="date"
          value={shipmentData.etd}
          onChange={updateEntry}
          placeholder="etd"
          maxLength="40"
          required
        />

        <LabelStyled htmlFor="eta">Schiffsankunft Hamburg:</LabelStyled>
        <InputStyled
          id="eta"
          name="eta"
          type="date"
          value={shipmentData.eta}
          onChange={updateEntry}
          placeholder="eta"
          maxLength="40"
          required
        />
        <InputStyled type="submit" value="Abschicken" />
      </FormStyled>
    </main>
  )
  function updateEntry(e) {
    setShipmentData({ ...shipmentData, [e.target.name]: e.target.value })
  }
}

const Headline = styled.h2`
  color: #fff;
  text-align: center;
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
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 0.5em;
`

const InputStyled = styled.input`
  width: 250px;
  border: none;
  border-radius: 5px;
  padding: 0.75em;
  margin: 1em;
  font-size: 1rem;
`
