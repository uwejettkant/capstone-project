import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../firebase'
import CreateButton from '../images/createbutton.png'

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
        placeholder="max. 20 Zeichen"
        value={value}
        maxLength="20"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <ButtonStyled>
        <img src={CreateButton} alt="" />
      </ButtonStyled>
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
  color: #000;
  font-size: 1.25rem;
  font-weight: 300;
  margin-left: 1em;
`

const InputStyled = styled.input`
  width: 250px;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  align-self: center;
  border: 1px solid #000;
`

const ButtonStyled = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  background-color: var(--button-color);
  align-self: center;
  border: none;
`
