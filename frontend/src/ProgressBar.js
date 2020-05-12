import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ProgressBar.propTypes = {
  percentage: PropTypes.number,
}

export default function ProgressBar({ percentage }) {
  function progressLimits(min, value, max) {
    return Math.min(Math.max(min, value), max)
  }
  return (
    <ProgressWrapper>
      <ProgressLine percentage={progressLimits(0, percentage, 100)} />
    </ProgressWrapper>
  )
}

const ProgressWrapper = styled.div`
  width: 250px;
  height: 20px;
  margin: 15px auto;
  background: #8eb8fa;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #1875c7;
`

const ProgressLine = styled.div`
  background: #92f7cd;
  height: 100%;
  width: ${(props) => props.percentage}%;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`
