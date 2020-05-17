import React, { useState, useEffect } from 'react'
import NoteDescription from './NoteDescription'
import NoteForm from './NoteForm'
import styled from 'styled-components/macro'
import { db } from './firebase'

export default function IndividualNotes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    db.collection('individual-notes').onSnapshot((snapshot) => {
      const getNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setNotes(getNotes)
    })
  }, [])

  function completeNote(index) {
    const newNotice = [...notes]
    newNotice[index].isCompleted = true
    setNotes(newNotice)
  }

  function removeNote(notes) {
    db.collection('individual-notes')
      .doc(notes.id)
      .delete()
      .then(function () {
        console.log('Document successfully deleted!')
      })
      .catch(function (error) {
        console.error(
          'Oops, etwas ist schief gelaufen. Bitte versuche es später erneut.',
          error
        )
      })
  }

  return (
    <main>
      <NoteListWrapper>
        {notes.map((notes, index) => (
          <NoteDescription
            key={index}
            index={index}
            notes={notes}
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
