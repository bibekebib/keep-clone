import React from 'react'

function Notes(props) {
  const deleteNote = () => {
    props.deleteItem(props.id)
  }
  return (
    <>
      <div className="ind_note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="deleteIcon" onClick={deleteNote}>
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </>
  )
}

export default Notes
