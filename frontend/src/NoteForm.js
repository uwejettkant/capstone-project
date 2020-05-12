import React, { useState, } from 'react'
import styled from 'styled-components/macro'

export default function NoteForm({ addNotice, defaultText }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addNotice(value)
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
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 0.5em;
`

const InputStyled = styled.input`
  width: 250px;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin: 1em;
`
