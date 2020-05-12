import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <LogoStyled>Import Ganz Einfach</LogoStyled>
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`
