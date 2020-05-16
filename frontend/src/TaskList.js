import React, { useState } from 'react'
import styled from 'styled-components/macro'
import userTask from './TaskList.json'
import GetNextTaskButton from './GetNextTaskButton'
import { Link, useRouteMatch } from 'react-router-dom'
import Info from './images/info.jpg'
import Product from './images/product.jpg'
import Numbers from './images/numbers.jpg'
import Restriction from './images/restriction.jpg'
import Sample from './images/sample.jpg'
import Dollar from './images/dollar.jpg'
import Calculation from './images/calculation.jpg'
import Contract from './images/contract.jpg'
import Eori from './images/eori.jpg'
import Container from './images/container.jpg'
import Money from './images/money.jpg'
import Data from './images/data.jpg'
import Pallets from './images/pallets.jpg'
import Tax from './images/tax.jpg'
import Deal from './images/deal.jpg'
import Congratulations from './images/congratulations.jpg'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types'

ProgressBar.propTypes = {
  percentage: PropTypes.number,
}

export default function TaskList() {
  const [progress, setProgress] = useState({ percentage: 0 })
  const match = useRouteMatch()

  return (
    <main>
      <CenteredWrapper>
        {userTask.map(
          (task, index) =>
            task.id === parseInt(match.params.taskId) && (
              <Frame key={task.id}>
                {task.id === 1 && <img src={Info} alt="info on wall" />}
                {task.id === 2 && <img src={Product} alt="shop" />}
                {task.id === 3 && <img src={Numbers} alt="pen and numbers" />}
                {task.id === 4 && <img src={Restriction} alt="stop sign" />}
                {task.id === 5 && <img src={Sample} alt="sample" />}
                {task.id === 6 && <img src={Dollar} alt="one dollar" />}
                {task.id === 7 && <img src={Calculation} alt="calculator" />}
                {task.id === 8 && <img src={Contract} alt="contract" />}
                {task.id === 9 && <img src={Eori} alt="documents on table" />}
                {task.id === 10 && <img src={Container} alt="containers" />}
                {task.id === 11 && <img src={Money} alt="money" />}
                {task.id === 12 && <img src={Data} alt="data" />}
                {task.id === 13 && <img src={Pallets} alt="pallets" />}
                {task.id === 14 && <img src={Tax} alt="tax" />}
                {task.id === 15 && <img src={Deal} alt="shaking hands" />}
                {task.id === 16 && (
                  <img src={Congratulations} alt="congratulations" />
                )}
                <h2 className="headline">{task.headline}</h2>
                <p className="user-task-description">{task.todo}</p>
                <div className="button-wrapper">
                  {task.linkText && (
                    <a className="link" href={task.url} target="blank">
                      {task.linkText}
                    </a>
                  )}
                  {task.linkTextOne && (
                    <a className="link" href={task.urlOne} target="blank">
                      {task.linkTextOne}
                    </a>
                  )}
                  <Link to={`/task/${userTask[index + 1].id}`}>
                    {task.id === 16 || (
                      <GetNextTaskButton
                        defaultText="Zum Nächsten Schritt"
                        onClick={() =>
                          setProgress({
                            percentage: progress.percentage + 6.66,
                          })
                        }
                      />
                    )}
                  </Link>
                  <ProgressBar percentage={progress.percentage} />
                </div>
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
`
const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  width: 350px;
  color: #fff;
  font-size: 1.125rem;
  background: transparent;
  border-radius: 25px;

  img {
    height: 28%;
    width: 100%;
    object-fit: cover;
  }

  .headline {
    margin: 0.5em;
    text-align: center;
  }

  .user-task-description {
    padding: 1em;
    margin: 0;
    font-size: 1rem;
  }

  .link {
    background: linear-gradient(45deg, #fff, #accbfa);
    padding: 0.5em;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color: #4287f5;
    width: 175px;
    margin: 0.5em;
    text-decoration: none;
    font-size: 0.8rem;
    text-align: center;

    &:active {
      transform: scale(1.1);
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`
