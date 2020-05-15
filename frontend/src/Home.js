import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <LinkWrapper>
        <NavLinkStyled to="/task/1">
          <Headline>Schritt für Schritt Anleitung</Headline>
        </NavLinkStyled>
        <NavLinkStyled to="/individual-notes">
          <Headline>Meine Notizen</Headline>
        </NavLinkStyled>
        <NavLinkStyled to="/create-shipment">
          <Headline>Erstelle Dein Shipment</Headline>
        </NavLinkStyled>
        <NavLinkStyled to="/my-shipments">
          <Headline>Deine Seefracht Sendungen</Headline>
        </NavLinkStyled>
      </LinkWrapper>
    </main>
  )
}

const NavLinkStyled = styled(NavLink)`
  background: #fff;
  color: #000;
  width: 125px;
  height: 100px;
  margin: 0 auto;
  border-radius: 25px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #12263d;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 550px;
`
const Headline = styled.h4`
  margin: 0;
`
