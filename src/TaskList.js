import React, { useState } from 'react'
import styled from 'styled-components/macro'
import userTask from './TaskList.json'
import GetNextTaskButton from './GetNextTaskButton'

export default function TaskList() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  return (
    <main>
      <CenteredWrapper>
        {userTask.map((task) => (
          <Frame key={task.id}>
            <h2 className="headline">{task.headline}</h2>
            <p className="user-task-description">{task.todo}</p>
            <a className="link" href={task.url} target="blank">
              {task.linkText}
            </a>
            <a className="link" href={task.url1} target="blank">
              {task.linkText1}
            </a>
            <GetNextTaskButton
              isActive={isButtonSelected}
              defaultText="Zum Nächsten Schritt"
              activeText="Done"
              onClick={() => setIsButtonSelected(!isButtonSelected)}
            />
          </Frame>
        ))}
      </CenteredWrapper>
    </main>
  )
}

const CenteredWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`
const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 575px;
  width: 350px;
  color: #fff;
  font-size: 1.125rem;
  background: linear-gradient(45deg, #8eb8fa, #4287f5);
  border-radius: 25px;
  margin: 1em;

  .headline {
    margin: 0;
  }

  .user-task-description {
    padding: 2em;
    margin: 0;
    font-size: 1rem;
  }

  .link {
    background: linear-gradient(45deg, #fff, #accbfa);
    padding: 1em;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color: #4287f5;
    width: 150px;
    margin: 0.5em;
    text-decoration: none;
    font-size: 0.74rem;
    text-align: center;

    &:active {
      transform: scale(1.1);
    }
  }
`
