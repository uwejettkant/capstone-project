import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <LinkWrapper>
        <NavLinkStyled to="/task/1">
          <h4>
            Schritt für Schritt Anleitung für den Import physischer Produkte
          </h4>
        </NavLinkStyled>
        <NavLinkStyled to="/individual-notes">
          <h4>Meine Notizen</h4>
        </NavLinkStyled>
      </LinkWrapper>
    </>
  )
}

const NavLinkStyled = styled(NavLink)`
  background: #fff;
  color: #000;
  width: 200px;
  height: 150px;
  margin: 0 auto;
  border-radius: 25px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #12263d;

  h4 {
    margin: 0;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
`
