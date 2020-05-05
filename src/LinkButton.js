import React from 'react'
import styled from 'styled-components/macro'

export default function LinkButton({ children }) {
  return <LinkButtonStyled>{children}</LinkButtonStyled>
}

const LinkButtonStyled = styled.button`
  background: linear-gradient(45deg, #fff, #accbfa);
  padding: 1em;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #4287f5;
  width: 150px;
  margin: 0.5em;

  &:active {
    transform: scale(1.1);
  }
`
