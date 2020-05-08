import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <NavLinkStyled to="/task/1">
      <h4 className="nav-text">
        Deine Schritt für Schritt Anleitung für den Import physischer Produkte
      </h4>
    </NavLinkStyled>
  )
}

const NavLinkStyled = styled(NavLink)`
  background: #fff;
  color: #000;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 25px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`
