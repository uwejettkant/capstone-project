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
  background: transparent;

  .fa-home {
    color: #fff;
    background: transparent;
    font-size: 2.5rem;
    margin-bottom: .15em;
  }
`

const NavLinkStyled = styled(NavLink)`
  /* padding: 10px; */
  &.selected {
    background: #dde8eb;
  }
  img {
    height: 25px;
  }
`
