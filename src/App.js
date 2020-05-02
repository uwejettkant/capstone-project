import React from 'react'
import TaskList from './taskList'
import GlobalStyles from './globalStyles'
import Header from './header'
import Footer from './footer'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <TaskList />
      <Footer />
    </>
  )
}
