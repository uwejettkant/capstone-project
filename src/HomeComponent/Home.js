import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import guide from '../images/guide.png'
import note from '../images/note.png'
import create from '../images/create.png'
import myship from '../images/myship.png'
import vector from '../images/vector.png'

export default function Home() {
  return (
    <main>
      <BackgroundWrapperTop>
        <img className="vector" src={vector} alt="" />
        <h3 className="headline">Dein Step By Step Import Guide</h3>
        <h3 className="sub_headline">Starte noch heute!</h3>
        <LinkBox>
          <NavLinkStyled to="/task/1">
            <img
              className="guide-logo"
              src={guide}
              alt="click to get the import guide"
            />
          </NavLinkStyled>
          <NavLinkStyled to="/individual-notes">
            <img
              className="note-logo"
              src={note}
              alt="click to to get the note page"
            />
          </NavLinkStyled>
        </LinkBox>
      </BackgroundWrapperTop>
      <BackgroundWrapperBottom>
        <NavLinkStyled to="/create-shipment">
          <img
            className="create-logo"
            src={create}
            alt="click to get to the create page"
          />
        </NavLinkStyled>
        <NavLinkStyled to="/my-shipments">
          <img
            className="myship-logo"
            src={myship}
            alt=" click to get the my-shipment page"
          />
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
    position: absolute;
    margin-left: 1em;
  }

  .headline {
    width: 246px;
    height: 84px;
    color: #fff;
    margin-top: 0;
    top: 90px;
  }

  .sub_headline  {
    top: 160px;
    color: var(--blured-blue);
  }

  .vector {
    position: relative;
    top: 0;
    opacity: 0.64;
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`
const BackgroundWrapperBottom = styled.div`
  width: 375px;
  height: 215px;
  background: #e3e4e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
