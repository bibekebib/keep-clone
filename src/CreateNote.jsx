import React from 'react'

function CreateNote() {
  return (
    <>
      <div className="main_note">
        <form action="">
          <input
            type="text"
            name=""
            placeholder="Title"
            id=""
            autoComplete="off"
          />
          <textarea
            name=""
            id=""
            cols=""
            rows=""
            placeholder="Write a Note......"
          ></textarea>
                  <div className="button">
        <i class="fas fa-plus"></i>
         
        </div>
        </form>

      </div>
    </>
  )
}

export default CreateNote
