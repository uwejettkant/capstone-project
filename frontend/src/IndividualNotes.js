import React, { useState, useEffect } from 'react'
import NoteDescription from './NoteDescription'
import NoteForm from './NoteForm'
import styled from 'styled-components/macro'
import { db } from './firebase'

export default function IndividualNotes() {
  const [note, setNote] = useState([])

  useEffect(() => {
    db.collection('individual-notes').onSnapshot((snapshot) => {
      const getNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setNote(getNotes)
    })
  }, [])

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
        <NoteForm defaultText="Deine Notiz" />
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
