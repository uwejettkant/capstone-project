import React from 'react'
import GlobalStyles from './GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import GuideIntroduction from './GuideIntroduction'
import FirstTask from './FirstTask'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <GuideIntroduction />
        </Route>
        <Route path="/FirstTask">
          <FirstTask />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
