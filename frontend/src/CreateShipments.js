import React, { useState, } from 'react'
import styled from 'styled-components/macro'
import NoteForm from './NoteForm'

export default function CreateShipments() {
    const [notice, setNotice] = useState([])

    function addNotice(text) {
        const newNotice = [...notice, { text }]
        setNotice(newNotice)
        console.log(text)
      }
    
      return (
        <main>
            <Headline>Gibt Deine Sendungsdaten hier ein!</Headline>
            <NoteForm addNotice={addNotice} defaultText='Warenbeschreibung'/>
            <NoteForm addNotice={addNotice} defaultText='Bill Of Lading Nr.'/>
            <NoteForm addNotice={addNotice} defaultText='Lieferant'/>
            <NoteForm addNotice={addNotice} defaultText='Palettenanzahl'/>
            <NoteForm addNotice={addNotice} defaultText='Schiffsabfahrt Origin (etd)'/>
            <NoteForm addNotice={addNotice} defaultText='Schiffsankunft Destination (eta)'/>
            <NoteForm addNotice={addNotice} defaultText='Abfahrtshafen' />
            <NoteForm addNotice={addNotice} defaultText='Ankunftshafen' />
        </main>
      )
    }

    const Headline = styled.h2`
        font-weight: bold;
        color: #fff;
        text-align: center;
        padding: 1em;
        margin: 0;
    `

    const SubmitedText = styled.p`
      color: #fff;
    `





