import React, { useState } from 'react'
import styled from 'styled-components/macro'
import userTask from './TaskList.json'
import GetNextTaskButton from './GetNextTaskButton'
import LinkButtonStyled from './LinkButton'

export default function GuideIntroduction() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  return (
    <main>
      <CenteredWrapper>
        {userTask.slice(0, 1).map((task) => (
          <Frame key={task.id}>
            <h2>{task.headline}</h2>
            <p>{task.todo}</p>
            <a href="https://www.amazon.de/dp/B07V65RGDV" target="blank">
              <LinkButtonStyled>{task.link}</LinkButtonStyled>
            </a>
            <GetNextTaskButton
              isActive={isButtonSelected}
              defaultText="Starte Deinen Guide"
              activeText="Done"
              onClick={() => setIsButtonSelected(!isButtonSelected)}
            />
          </Frame>
        ))}
      </CenteredWrapper>
    </main>
  )
}

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
`
const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.125rem;
  background: linear-gradient(45deg, #8eb8fa, #4287f5);
  height: 450px;
  width: 350px;
  border-radius: 25px;
  margin: 1em;

  h2 {
    margin: 0;
  }

  p  {
    padding: 2em;
    margin: 0;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #4287f5;
  }

  .link-button {
    background: linear-gradient(45deg, #fff, #accbfa);
    padding: 1em;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color: #4287f5;
    width: 150px;
    margin: 0.5em;
  }

  .link-button:active {
    transform: scale(1.1);
  }
`
