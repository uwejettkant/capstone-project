import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './Home'
import TaskList from './TaskList'
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
      </Switch>
      <Footer />
    </>
  )
}
