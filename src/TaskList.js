import React, { useState } from 'react'
import styled from 'styled-components/macro'
import userTask from './TaskList.json'
import GetNextTaskButton from './GetNextTaskButton'
import { Link, useRouteMatch } from 'react-router-dom'
import Product from './images/product.jpg'
import Numbers from './images/numbers.jpg'
import Restriction from './images/restriction.jpg'
import Sample from './images/sample.jpg'
import Offer from './images/offer.jpg'
import Calculator from './images/calculator.jpg'
import Contract from './images/contract.jpg'
import Eori from './images/eori.jpg'
import Container from './images/container.jpg'
import Money from './images/money.jpg'
import Data from './images/data.jpg'
import Pallets from './images/pallets.jpg'
import Tax from './images/tax.jpg'
import Deal from './images/deal.jpg'

export default function TaskList() {
  const [isButtonSelected, setIsButtonSelected] = useState(false)

  const match = useRouteMatch()

  return (
    <main>
      <CenteredWrapper>
        {userTask.map(
          (task, index) =>
            task.id === parseInt(match.params.taskId) && (
              <Frame key={task.id}>
                {task.id === 2 && <img src={Product} alt="shopimage" />}
                {task.id === 3 && <img src={Numbers} alt="pen and numbers" />}
                {task.id === 4 && <img src={Restriction} alt="stop sign" />}
                {task.id === 5 && <img src={Sample} alt="sample" />}
                {task.id === 6 && <img src={Offer} alt="signing paper" />}
                {task.id === 7 && <img src={Calculator} alt="calculator" />}
                {task.id === 8 && <img src={Contract} alt="contract" />}
                {task.id === 9 && <img src={Eori} alt="documents on table" />}
                {task.id === 10 && <img src={Container} alt="containers" />}
                {task.id === 11 && <img src={Money} alt="money" />}
                {task.id === 12 && <img src={Data} alt="data" />}
                {task.id === 13 && <img src={Pallets} alt="pallets" />}
                {task.id === 14 && <img src={Tax} alt="tax" />}
                {task.id === 15 && <img src={Deal} alt="shaking hands" />}
                <h2 className="headline">{task.headline}</h2>
                <p className="user-task-description">{task.todo}</p>
                <a className="link" href={task.url} target="blank">
                  {task.linkText}
                </a>
                <a className="link" href={task.url1} target="blank">
                  {task.linkText1}
                </a>
                <Link to={`/task/${userTask[index + 1].id}`}>
                  <GetNextTaskButton
                    isActive={isButtonSelected}
                    defaultText="Zum Nächsten Schritt"
                    activeText="Done"
                    onClick={() => setIsButtonSelected(!isButtonSelected)}
                  />
                </Link>
              </Frame>
            )
        )}
      </CenteredWrapper>
    </main>
  )
}

const CenteredWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  background: transparent;
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

  img {
    height: 45%;
    width: 100%;
    border-radius: 25px 25px 0 0;
    object-fit: cover;
  }

  .headline {
    margin: 0;
  }

  .user-task-description {
    padding: 1em;
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
