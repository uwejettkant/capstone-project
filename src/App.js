import React from 'react'
import GuideIntroduction from './GuideIntroduction'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
// import FirstTask from './firstTask'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <GuideIntroduction />
      {/* <FirstTask /> */}
      <Footer />
    </>
  )
}
