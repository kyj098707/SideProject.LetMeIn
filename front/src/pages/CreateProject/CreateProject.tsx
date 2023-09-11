import React, { useState, useRef, FormEvent } from 'react'
import './CreateProject.scss'

const CreateProject = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log(textareaRef.current!.value)
  }

  return (
    <div className="createProject-container">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef}/>

        <span>* 필수 입력 항목</span>

        <textarea 
          name=""
          id=""
          cols={30}
          rows={10}
          ref={textareaRef}
        ></textarea>
        <button type="submit">작성</button>
      </form>
    </div>
  )
}

export default CreateProject