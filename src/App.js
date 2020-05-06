import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import TaskList from './TaskList'
import Footer from './Footer'

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
