import React from 'react'
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
          <MyShipments />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
