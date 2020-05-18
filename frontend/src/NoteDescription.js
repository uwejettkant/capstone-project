import React from 'react'
import styled from 'styled-components/macro'

export default function NoteDescription({
  notes,
  index,
  completeNote,
  removeNote,
}) {
  return (
    <>
      <MyNotes
        style={{
          textDecorationThickness: notes.isCompleted ? '0.1em' : '',
        }}
        notes={notes}
      >
        {notes.value}
        <ButtonWrapper>
          <DescriptionButton onClick={() => completeNote(index)}>
            Erledigt
          </DescriptionButton>
          <DescriptionButton onClick={() => removeNote(notes)}>
            Löschen
          </DescriptionButton>
        </ButtonWrapper>
      </MyNotes>
    </>
  )
}

const MyNotes = styled.section`
  text-decoration: ${(props) =>
    props.notes.isCompleted ? 'line-through' : ''};
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
  padding: 1em;
  font-size: 0.75rem;
  border: none;
  margin-right: 1em;
  border-radius: 5px;
  background: #8eb8fa;
  color: #fff;
`
