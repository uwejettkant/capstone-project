import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './Home'
import TaskList from './TaskList'
import IndividualNotes from './IndividualNotes'
import CreateShipment from './CreateShipment'
import MyShipments from './MyShipments'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import { db } from './firebase'

export default function App() {
  const [shipment, setShipment] = useState([])

  useEffect(() => {
    db.collection('my-shipments').onSnapshot((snapshot) => {
      const newShipment = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setShipment(newShipment)
    })
  }, [])

  function deleteShipment(index) {
    const discardShipment = [...shipment]
    discardShipment.splice(index, 1)
    setShipment(discardShipment)
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/task/:taskId">
          <TaskList />
        </Route>
        <Route path="/individual-notes">
          <IndividualNotes />
        </Route>
        <Route path="/create-shipment">
          <CreateShipment />
        </Route>
        <Route path="/my-shipments">
          <MyShipments deleteShipment={deleteShipment} shipment={shipment} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
