import React from 'react'
import TaskList from './TaskList'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
// import FirstTask from './firstTask'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <TaskList />
      {/* <FirstTask /> */}
      <Footer />
    </>
  )
}
