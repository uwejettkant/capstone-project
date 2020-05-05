import React, { useState } from 'react'
import styled from 'styled-components/macro'
import userTask from './TaskList.json'
import GetNextTaskButton from './GetNextTaskButton'
import LinkButtonStyled from './LinkButton'

export default function FirstTask() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  return (
    <main>
      <CenteredWrapper>
        {userTask.slice(1, 2).map((task) => (
          <Frame key={task.id}>
            <h2 className="headline">{task.headline}</h2>
            <p className="user-task-description">{task.todo}</p>
            <a className="link" href="https://www.alibaba.com/" target="blank">
              <LinkButtonStyled>{task.link}</LinkButtonStyled>
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

  .headline {
    margin: 0;
  }

  .user-task-description  {
    padding: 3em;
    margin: 0;
    font-size: 1.25rem;
  }

  .link {
    text-decoration: none;
    color: #4287f5;
  }
`
