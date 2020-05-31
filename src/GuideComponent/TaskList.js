import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import GetNextTaskButton from './GetNextTaskButton'
import { Link, useRouteMatch } from 'react-router-dom'
import info from '../images/info.jpg'
import product from '../images/product.jpg'
import numbers from '../images/numbers.jpg'
import restriction from '../images/restriction.jpg'
import sample from '../images/sample.jpg'
import dollar from '../images/dollar.jpg'
import calculation from '../images/calculation.jpg'
import contract from '../images/contract.jpg'
import eori from '../images/eori.jpg'
import container from '../images/container.jpg'
import money from '../images/money.jpg'
import data from '../images/data.jpg'
import pallets from '../images/pallets.jpg'
import tax from '../images/tax.jpg'
import deal from '../images/deal.jpg'
import congratulations from '../images/congratulations.jpg'
import ProgressBar from './ProgressBar'
import PropTypes from 'prop-types'
import { db } from '../firebase'

ProgressBar.propTypes = {
  percentage: PropTypes.number,
}

export default function TaskList() {
  const [progress, setProgress] = useState({ percentage: 0 })
  const match = useRouteMatch()
  const [userTask, setUserTask] = useState([])

  useEffect(() => {
    db.collection('TaskList')
      .orderBy('id')
      .onSnapshot((snapshot) => {
        const getTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setUserTask(getTasks)
      })
  }, [])

  return (
    <main>
      <CenteredWrapper>
        <BackgroundWrapperTop>
          <ProgressBar percentage={progress.percentage} />
        </BackgroundWrapperTop>
        {userTask.map(
          (task, index) =>
            task.id === parseInt(match.params.taskId) && (
              <ScrollingArea key={task.id}>
                {task.id === 1 && <img src={info} alt="info on wall" />}
                {task.id === 2 && <img src={product} alt="shop" />}
                {task.id === 3 && <img src={numbers} alt="pen and numbers" />}
                {task.id === 4 && <img src={restriction} alt="stop sign" />}
                {task.id === 5 && <img src={sample} alt="sample" />}
                {task.id === 6 && <img src={dollar} alt="one dollar" />}
                {task.id === 7 && <img src={calculation} alt="calculator" />}
                {task.id === 8 && <img src={contract} alt="contract" />}
                {task.id === 9 && <img src={eori} alt="documents on table" />}
                {task.id === 10 && <img src={container} alt="containers" />}
                {task.id === 11 && <img src={money} alt="money" />}
                {task.id === 12 && <img src={data} alt="data" />}
                {task.id === 13 && <img src={pallets} alt="pallets" />}
                {task.id === 14 && <img src={tax} alt="tax" />}
                {task.id === 15 && <img src={deal} alt="shaking hands" />}
                {task.id === 16 && (
                  <img src={congratulations} alt="congratulations" />
                )}
                <h2 className="headline">{task.headline}</h2>
                <p className="user-task-description">{task.todo}</p>
                <>
                  <LinkWrapper>
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
                  </LinkWrapper>
                  <NavigationWrapper>
                    <Link
                      to={`/task/${
                        userTask[index === 0 ? index : index - 1].id
                      }`}
                    >
                      {task.id === 1 || (
                        <GetNextTaskButton
                          defaultText="Zurück"
                          onClick={() =>
                            setProgress({
                              percentage: progress.percentage - 6.66,
                            })
                          }
                        />
                      )}
                    </Link>
                    <Link to={`/task/${userTask[index + 1].id}`}>
                      {task.id === 16 || (
                        <GetNextTaskButton
                          defaultText="Weiter"
                          className="btn-next"
                          onClick={() =>
                            setProgress({
                              percentage: progress.percentage + 6.66,
                            })
                          }
                        />
                      )}
                    </Link>
                  </NavigationWrapper>
                </>
              </ScrollingArea>
            )
        )}
      </CenteredWrapper>
    </main>
  )
}

const BackgroundWrapperTop = styled.div`
  width: 375px;
  height: 359px;
  background-image: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);
  position: absolute;
  top: 48px;
  display: flex;
  justify-content: center;

  h3 {
    color: #91adf1;
    text-align: center;
    margin: 0;
    padding-top: 0.5em;
  }
`

const ScrollingArea = styled.section`
  width: 350px;
  height: 500px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0.5);
  background-color: #fff;
  overflow: scroll;
  position: fixed;
  top: 100px;
  left: 12px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 335px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  .headline {
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.55px;
    color: var(--dark-text);
  }

  .user-task-description {
    font-size: 0.75rem;
    line-height: 1.71;
    letter-spacing: 0.38px;
    color: #747f89;
    margin: 0;
  }

  .link {
    width: 125px;
    padding: 0.8em;
    border-radius: 4px;
    border: none;
    font-size: 0.75rem;
    background-color: var(--button-color);
    color: #fff;
    text-decoration: none;
    margin: 0.5em;
    text-align: center;

    &:active {
      transform: scale(1.1);
    }
  }
`

const CenteredWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
