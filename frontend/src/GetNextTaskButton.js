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
  width: 100px;
  height: 35px;
  border-radius: 4px;
  border: none;
  background-color: #194cda;
  color: #fff;

  &:active {
    transform: scale(1.1);
  }
`
