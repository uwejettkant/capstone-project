import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <FooterStyled>
      <NavLinkStyled exact to="/">
        <i className="fas fa-home"></i>
      </NavLinkStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e3e4e6;

  .fa-home {
    color: #2156e7;
    background: transparent;
    font-size: 2.5rem;
  }
`

const NavLinkStyled = styled(NavLink)`
  background: transparent;
`
