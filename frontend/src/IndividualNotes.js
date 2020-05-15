import React, { useState } from 'react'
import NoteDescription from './NoteDescription'
import NoteForm from './NoteForm'
import styled from 'styled-components/macro'

export default function IndividualNotes() {
  const [note, setNote] = useState([
    {
      text: 'Lieferanten finden',
      isCompleted: false,
    },
    {
      text: 'Lieferbedingung festlegen',
      isCompleted: false,
    },
    {
      text: 'Kosten kalkulieren',
      isCompleted: false,
    },
  ])

  function addNote(text) {
    const newNotice = [...note, { text }]
    setNote(newNotice)
  }

  function completeNote(index) {
    const newNotice = [...note]
    newNotice[index].isCompleted = true
    setNote(newNotice)
  }

  function removeNote(index) {
    const newNotice = [...note]
    newNotice.splice(index, 1)
    setNote(newNotice)
  }

  return (
    <main>
      <NoteListWrapper>
        {note.map((note, index) => (
          <NoteDescription
            key={index}
            index={index}
            note={note}
            completeNote={completeNote}
            removeNote={removeNote}
          />
        ))}
        <NoteForm addNote={addNote} defaultText="Deine Notiz" />
      </NoteListWrapper>
    </main>
  )
}

const NoteListWrapper = styled.section`
  border-radius: 5px;
  padding: 5px;
  max-width: 400px;
  margin: 0 auto;
`
