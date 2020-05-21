import React from 'react'
import styled from 'styled-components/macro'
import Logo from './images/Logo.png'

export default function Header() {
  return (
    <LogoStyled>
      <img src={Logo} alt="" />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: transparent; */
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);

  img {
    background: transparent;
    width: 158px;
    height: 48px;
    object-fit: contain;
  }
`
