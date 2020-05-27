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
  width: 345px;
  height: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0.5);
  background-color: #fff;
  margin-top: 1em;
`

const ProgressLine = styled.div`
  background: #92f7cd;
  height: 100%;
  border-radius: 4px;
  width: ${(props) => props.percentage}%;
  transition: width 0.5s ease-in-out;
`
