import React, { useRef } from 'react'
import './CreateProject.scss'

const CreateProject = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const handleSubmit = () => {
    console.log("title : " + titleRef.current!.value)
    console.log("contents : " + textareaRef.current!.value)
  }

  return (
    <div className="createProject-container">
      <div className="contents">
        <input type="text" ref={titleRef}/>

        <span>*필수 입력 항목</span>

        <textarea 
          name=""
          id=""
          cols={30}
          rows={10}
          ref={textareaRef}
        ></textarea>
        <button onClick={handleSubmit}>작성</button>
      </div>
    </div>
  )
}

export default CreateProject