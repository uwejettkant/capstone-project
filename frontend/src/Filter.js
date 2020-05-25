import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ onChange }) {
  return (
    <FilterStyled type="text" placeholder="Search..." onChange={onChange} />
  )
}

const FilterStyled = styled.input`
  width: 350px;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #446ddb;
  background-color: #173fac;
  margin-left: 0.75em;

  color: #fff;
  font-size: 1rem;
  padding-left: 2em;
`
