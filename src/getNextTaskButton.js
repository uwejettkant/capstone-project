import React from 'react'
import styled from 'styled-components/macro'

export default function GetNextTaskButton({ onClick, defaultText }) {
  return (
    <ButtonStyled defaultText={defaultText} onClick={onClick}>
      {defaultText}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: linear-gradient(45deg, #fff, #accbfa);
  padding: 0.5em;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #4287f5;
  width: 175px;
  margin-bottom: 1.25em;
  margin: 0.5em;

  &:active {
    transform: scale(1.1);
  }
`
