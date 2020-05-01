import React from 'react'
import styled from "styled-components";
import services from './services'

export default function Tasks() {
    return (
        <main>
            <CenteredWrapper>
                {services.slice(0, 1)
                .map(tasks => (
                <Frame key={tasks.id}>
                    <h2>{tasks.headline}</h2>
                    <p>{tasks.todo}</p>
                    <a href="https://www.amazon.de/dp/B07V65RGDV" target="blank"><button>{tasks.link}</button></a>
                    <button>Starte deinen Guide</button>
                </Frame>
            ))}
            </CenteredWrapper>
        </main>
    )
}

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`
const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 1.125rem;
  background: linear-gradient( 45deg, #8eb8fa, #4287f5);
  height: 450px;
  width: 350px;
  border-radius: 25px;
  margin-top: 1em;
  padding-bottom: 1em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);


  p {
      padding: 2em;
      font-size: 1rem;
  }

  a {
      text-decoration: none;
      color: #4287f5;
      
  }

  button {
    background: linear-gradient( 45deg, #fff, #accbfa);
      padding: 1em;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      color: #4287f5;
      width: 150px;
  }

  button:after {
  content: "";
  background: linear-gradient( 45deg, #fff, #accbfa);
  display: block;
  position: absolute;
  padding-top: 10%;
  padding-left: 40%;
  margin-left: -10px!important;
  margin-top: -7%;
  opacity: 0;
  transition: all 0.8s
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
`
