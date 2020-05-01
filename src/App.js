import React from 'react'
import Tasks from './tasks'
import GlobalStyles from './globalStyles'
import Header from './header'
import Footer from './footer'

export default function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Tasks />
      <Footer />
    </>
  )
}
