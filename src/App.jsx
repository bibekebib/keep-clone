import React, { useState } from 'react'
import './css/App.css'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Notes from './Notes'

function App() {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    // alert('want to add')
    setAddItem((prevData) => {
      return [...prevData, note]
    })

    console.log(note)
  }

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, index) => {
        return index !== id
      }),
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="note">
        {addItem.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default App
