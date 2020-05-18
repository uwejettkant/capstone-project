import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ onChange }) {
  return (
    <FilterStyled type="text" placeholder="Search..." onChange={onChange} />
  )
}

const FilterStyled = styled.input`
  width: 250px;
  border: none;
  border-radius: 5px;
  padding: 0.55em;
  margin: 1em;
  font-size: 0.75em;
`
