import React, { useState } from 'react'
import NoteDescription from './NoteDescription'
import NoteForm from './NoteForm'
import styled from 'styled-components/macro'

export default function IndividualNotes() {
  const [notice, setNotice] = useState([
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

  function addNotice(text) {
    const newNotice = [...notice, { text }]
    setNotice(newNotice)
  }

  function completeNotice(index) {
    const newNotice = [...notice]
    newNotice[index].isCompleted = true
    setNotice(newNotice)
  }

  function removeNotice(index) {
    const newNotice = [...notice]
    newNotice.splice(index, 1)
    setNotice(newNotice)
  }

  return (
    <main>
      <NoteListWrapper>
        {notice.map((notice, index) => (
          <NoteDescription
            key={index}
            index={index}
            notice={notice}
            completeNotice={completeNotice}
            removeNotice={removeNotice}
          />
        ))}
        <NoteForm addNotice={addNotice} defaultText="Deine Notiz" />
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
