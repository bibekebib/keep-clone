import React, { useState } from 'react'

function CreateNote(props) {
  const [expand, setExpand] = useState(false)
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  const InputEvent = (event) => {
    // const value = event.target.value
    // const name = event.target.name
    const { name, value } = event.target
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const addEvent = () => {
    props.passNote(note)
    setNote({
      title: '',
      content: '',
    })
  }

  const expandIt = () => {
    setExpand(true)
  }
  const backToNormal = () => {
    setExpand(false)
  }
  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
        <form action="">
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              id=""
              autoComplete="off"
            />
          ) : null}
          <textarea
            name="content"
            id=""
            cols=""
            rows=""
            value={note.content}
            onChange={InputEvent}
            onClick={expandIt}
            placeholder="Write a Note......"
          ></textarea>
          {expand ? (
            <div className="button" onClick={addEvent}>
              <i class="fas fa-plus"></i>
            </div>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default CreateNote
