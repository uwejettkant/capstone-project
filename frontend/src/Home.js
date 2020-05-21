import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Guide from './images/guide.png'
import Note from './images/note.png'
import Create from './images/create.png'
import Myship from './images/myship.png'

export default function Home() {
  return (
    <main>
      <BackgroundWrapperTop>
        <h3>Hello and hava a great Day!</h3>
        <LinkBox>
          <NavLinkStyled to="/task/1">
            <img className="guide-logo" src={Guide} alt="" />
          </NavLinkStyled>
          <NavLinkStyled to="/individual-notes">
            <img className="note-logo" src={Note} alt="" />
          </NavLinkStyled>
        </LinkBox>
      </BackgroundWrapperTop>
      <BackgroundWrapperBottom>
        <NavLinkStyled to="/create-shipment">
          <img className="create-logo" src={Create} alt="" />
        </NavLinkStyled>
        <NavLinkStyled to="/my-shipments">
          <img className="myship-logo" src={Myship} alt="" />
        </NavLinkStyled>
      </BackgroundWrapperBottom>
    </main>
  )
}

const NavLinkStyled = styled(NavLink)`
  background: #fff;
  width: 150px;
  height: 140px;
  border-radius: 4px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0, 5);

  .guide-logo {
    width: 95px;
    height: 89px;
    margin: 0 auto;
  }

  .note-logo  {
    width: 43px;
    height: 81px;
    margin: 0 auto;
  }

  .create-logo  {
    width: 85px;
    height: 88px;
    margin: 0 auto;
  }

  .myship-logo  {
    width: 69px;
    height: 87px;
    margin: 0 auto;
  }
`

const BackgroundWrapperTop = styled.div`
  width: 375px;
  height: 359px;
  background-image: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    width: 246px;
    height: 84px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fff;
    margin-top: 0;
    margin-left: 2em;
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const BackgroundWrapperBottom = styled.div`
  width: 375px;
  height: 215px;
  background: #e3e4e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
