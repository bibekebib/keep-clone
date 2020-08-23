import React from 'react'
import './css/App.css'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'

function App() {
  return (
    <>
      <Header />
      <CreateNote />
      <Notes />
      <Footer />
    </>
  )
}

export default App
