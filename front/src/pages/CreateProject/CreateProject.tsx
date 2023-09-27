import React, { useRef, useState } from 'react'
import { Tag } from '../../model/type'
import './CreateProject.scss'

const initialTag = {
  term: '기간',
  headCnt: '인원',
  role: '역할',
}

const CreateProject = () => {
  const [tag, setTag] = useState<Tag>(initialTag)
  const titleRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const handleSubmit = () => {
    console.log("title : " + titleRef.current!.value)
    console.log("contents : " + textareaRef.current!.value)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag({
      ...tag,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="createProject-container">
      <div className="contents">
        <input type="text" ref={titleRef}/>

        <span>*필수 입력 항목</span>

        <div>
          <span>기간: {tag.term}</span>
          <span>인원: {tag.headCnt}</span>
          <span>역할: {tag.role}</span>
        </div>

        <div>
          <ul>
            <li><label><input type="radio" name="term" value="~2주일 이내" onChange={handleRadioChange}/>~2주일 이내</label></li>
            <li><label><input type="radio" name="term" value="~1개월 이내" onChange={handleRadioChange}/>~1개월 이내</label></li>
            <li><label><input type="radio" name="term" value="~2개월 이내" onChange={handleRadioChange}/>~2개월 이내</label></li>
            <li><label><input type="radio" name="term" value="~3개월 이내" onChange={handleRadioChange}/>~3개월 이내</label></li>
          </ul>
          <ul>
            <li><label><input type="radio" name="headCnt" value="1~2인" onChange={handleRadioChange}/>1~2인</label></li>
            <li><label><input type="radio" name="headCnt" value="3~4인" onChange={handleRadioChange}/>3~4인</label></li>
            <li><label><input type="radio" name="headCnt" value="5~6인" onChange={handleRadioChange}/>5~6인</label></li>
            <li><label><input type="radio" name="headCnt" value="6인~" onChange={handleRadioChange}/>6인~</label></li>
          </ul>
          <ul>
            <li><label><input type="radio" name="role" value="프론트엔드" onChange={handleRadioChange}/>프론트엔드</label></li>
            <li><label><input type="radio" name="role" value="백엔드" onChange={handleRadioChange}/>백엔드</label></li>
          </ul>
        </div>

        <textarea 
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