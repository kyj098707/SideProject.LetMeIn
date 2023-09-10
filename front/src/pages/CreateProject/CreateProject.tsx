import React, { useState, ChangeEvent, FormEvent } from 'react'
import './CreateProject.scss'

const CreateProject = () => {
  const [textarea, setTextarea] = useState("")


  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value)
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
    console.dir(e.target)
  }


  return (
    <div className="createProject-container">
      <form onSubmit={handleSubmit}>
        <input type="text" />

        <span>* 필수 입력 항목</span>

        <textarea 
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={handleTextarea}
        ></textarea>
        <button type="submit">작성</button>
      </form>
    </div>
  )
}

export default CreateProject