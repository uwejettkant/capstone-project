import React from 'react'
import styled from 'styled-components/macro'

export default function NoteDescription({
  notes,
  index,
  completeNote,
  removeNote,
}) {
  return (
    <main>
      <MyNotes
        style={{
          textDecorationThickness: notes.isCompleted ? '0.1em' : '',
        }}
        notes={notes}
      >
        <label className="checkbox" htmlFor="checkbox">
          <Checkbox onClick={() => completeNote(index)} type="checkbox" />
        </label>
        <span className="note">{notes.value}</span>
        <DeleteButton onClick={() => removeNote(notes)}>
          <i className="fas fa-trash-alt"></i>
        </DeleteButton>
      </MyNotes>
    </main>
  )
}

const Checkbox = styled.input`
  width: 13px;
  height: 13px;
  background-color: transparent;
  color: var(--button-color);
  transition: all 0.2s ease-in-out;
  border: 2px solid #ececec;
  border-radius: 0.25rem;
`

const MyNotes = styled.section`
  text-decoration: ${(props) =>
    props.notes.isCompleted ? 'line-through' : ''};
  color: #000;
  font-size: 1.15rem;
  font-weight: bold;
  margin: 1em;
  margin-right: 1em;
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  align-items: center;

  .note {
    font-weight: 300;
  }
`

const DeleteButton = styled.button`
  border: none;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: #fff;
  color: var(--delete-button);
`
