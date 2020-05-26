import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './HomeComponent/Home'
import TaskList from './GuideComponent/TaskList'
import IndividualNotes from './NoteComponent/IndividualNotes'
import CreateShipment from './CreateComponent/CreateShipment'
import MyShipments from './MyShipmentComponent/MyShipments'
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
