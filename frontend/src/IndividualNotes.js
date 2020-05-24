import React, { useState, useEffect } from 'react'
import Notes from './Notes'
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
      <BackgroundWrapperTop>
        <h3>Notiz-Zettel</h3>
        <ScrollingArea>
          {notes.map((notes, index) => (
            <Notes
              key={index}
              index={index}
              notes={notes}
              completeNote={completeNote}
              removeNote={removeNote}
            />
          ))}
          <NoteForm defaultText="Deine Notiz" />
        </ScrollingArea>
      </BackgroundWrapperTop>
    </main>
  )
}

const BackgroundWrapperTop = styled.div`
  width: 375px;
  height: 359px;
  background-image: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.5;
    color: #91adf1;
    text-align: center;
    margin: 0;
    padding-top: 0.5em;
  }
`

const ScrollingArea = styled.section`
  width: 300px;
  height: 475px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0.5);
  background-color: #fff;
  overflow: scroll;
  position: fixed;
  top: 120px;
  left: 37px;
`
