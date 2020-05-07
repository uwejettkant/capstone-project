import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import TaskList from './TaskList'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/task/:taskId">
          <TaskList />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
