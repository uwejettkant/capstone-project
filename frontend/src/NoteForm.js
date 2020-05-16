import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from './firebase'

export default function NoteForm({ defaultText }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    db.collection('individual-notes')
      .add({ value })
      .then(() => console.log('New event added'))
      .catch((error) =>
        alert(
          'Oops, etwas ist schief gelaufen. Bitte versuche es später erneut.',
          error
        )
      )
    setValue('')
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="name">{defaultText}</LabelStyled>
      <InputStyled
        type="text"
        name={defaultText}
        placeholder="max. 40 Zeichen"
        value={value}
        maxLength="40"
        onChange={(e) => setValue(e.target.value)}
      />
      <InputStyled type="submit" value="Abschicken" />
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin-top: 0.5em;
`

const LabelStyled = styled.label`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5em;
`

const InputStyled = styled.input`
  width: 250px;
  border: none;
  border-radius: 5px;
  padding: 0.75em;
  margin: 0.5em;
  font-size: 1em;
`
