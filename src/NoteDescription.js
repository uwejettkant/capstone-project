import React from 'react'
import styled from 'styled-components/macro'

export default function NoteDescription({
  notice,
  index,
  completeNotice,
  removeNotice,
}) {
  return (
    <>
      <MyNotes
        style={{
          textDecoration: notice.isCompleted ? 'line-through' : '',
          textDecorationThickness: notice.isCompleted ? '0.1em' : '',
        }}
      >
        {notice.text}
        <ButtonWrapper>
          <DescriptionButton onClick={() => completeNotice(index)}>
            Erledigt
          </DescriptionButton>
          <DescriptionButton onClick={() => removeNotice(index)}>
            Löschen
          </DescriptionButton>
        </ButtonWrapper>
      </MyNotes>
    </>
  )
}

const MyNotes = styled.section`
  color: #fff;
  font-size: 1.15rem;
  font-weight: bold;
  margin: 1em;
  margin-right: 1em;
  margin-top: 1em;
`

const ButtonWrapper = styled.div`
  margin-top: 0.5em;
`

const DescriptionButton = styled.button`
  border: none;
  padding: 0.5em;
  font-size: 0.75rem;
  border: none;
  margin-right: 1em;
  border-radius: 5px;
  background: #8eb8fa;
  color: #fff;
`
