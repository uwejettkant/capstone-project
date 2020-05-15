import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateShipment({ addShipment }) {
  const [entry, setEntry] = useState({
    Bl: '',
    Palettenanzahl: '',
    Lieferant: '',
    Warenbeschreibung: '',
    etd: '',
    eta: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    addShipment(entry)
    // console.log(entry)
    setEntry({
      Bl: '',
      Palettenanzahl: '',
      Lieferant: '',
      Warenbeschreibung: '',
      etd: '',
      eta: '',
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
          value={entry.Bl}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Bl Nr."
          required
        />

        <LabelStyled htmlFor="Palettenanzahl">Palettenanzahl:</LabelStyled>
        <InputStyled
          id="Palettenanzahl"
          name="Palettenanzahl"
          type="number"
          value={entry.Palettenanzahl}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Palettenanzahl"
          required
        />

        <LabelStyled htmlFor="Lieferant">Lieferant:</LabelStyled>
        <InputStyled
          id="Lieferant"
          name="Lieferant"
          type="text"
          value={entry.Lieferant}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Lieferant"
          required
        />

        <LabelStyled htmlFor="Warenbeschreibung">
          Warenbeschreibung:
        </LabelStyled>
        <InputStyled
          id="Warenbeschreibung"
          name="Warenbeschreibung"
          type="text"
          value={entry.Warenbeschreibung}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="Warenbeschreibung"
          required
        />

        <LabelStyled htmlFor="etd">Schiffabfahrt Origin:</LabelStyled>
        <InputStyled
          id="etd"
          name="etd"
          type="date"
          value={entry.etd}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="etd"
          required
        />

        <LabelStyled htmlFor="eta">Schiffsankunft Destination:</LabelStyled>
        <InputStyled
          id="eta"
          name="eta"
          type="date"
          value={entry.eta}
          onChange={(e) =>
            setEntry({ ...entry, [e.target.name]: e.target.value })
          }
          placeholder="eta"
          required
        />
        <InputStyled type="submit" value="Abschicken" />
      </FormStyled>
    </main>
  )
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
  padding: 1em;
  margin: 1em;
  font-size: 1rem;
`
