import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './Home'
import TaskList from './TaskList'
import IndividualNotes from './IndividualNotes'
import CreateShipment from './CreateShipment'
import MyShipments from './MyShipments'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  const [shipment, setShipment] = useState([
    {
      Bl: 'XZZ3527',
      Palettenanzahl: 2,
      Lieferant: 'Saftpressenwerk',
      Warenbeschreibung: 'Saftpresse',
      etd: '25.04.19',
      eta: '30.05.19',
    },
  ])

  function addShipment(entry) {
    const newShipment = [...shipment, entry]
    setShipment(newShipment)
  }

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
          <CreateShipment addShipment={addShipment} />
        </Route>
        <Route path="/my-shipments">
          <MyShipments deleteShipment={deleteShipment} shipment={shipment} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
