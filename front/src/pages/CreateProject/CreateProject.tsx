import React, { useEffect, useRef, useState } from 'react'
import { Tag } from '../../model/type'
import styled from 'styled-components'

const initialTag = {
  term: '기간',
  headCnt: '인원',
  role: '역할',
  lang: ['언어'],
}

const CreateProject = () => {
  const [tag, setTag] = useState<Tag>(initialTag)
  const [langArr, setLangArr] = useState<string[]>([])
  const titleRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const handleSubmit = () => {
    console.log("title : " + titleRef.current!.value)
    console.log("contents : " + textareaRef.current!.value)
  }

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    
    if (key === 'lang') setLangArr([...langArr, e.target.value])
    else {
      setTag({
        ...tag,
        [key]: e.target.value
      })
    }
  }
  
  useEffect(()=>{
    setTag({
      ...tag,
      lang: langArr
    })
  }, [langArr])

  return (
    <ContainerBox>
      <input type="text" ref={titleRef}/>

      <span>*필수 입력 항목</span>

      <div>
        <span>기간: {tag.term}</span>
        <span>인원: {tag.headCnt}</span>
        <span>역할: {tag.role}</span>
        <span>언어: {tag.lang}</span>
      </div>

      <div>
        <ul>
          <li><label><input type="radio" name="term" value="~2주일 이내" onChange={handleTagChange}/>~2주일 이내</label></li>
          <li><label><input type="radio" name="term" value="~1개월 이내" onChange={handleTagChange}/>~1개월 이내</label></li>
          <li><label><input type="radio" name="term" value="~2개월 이내" onChange={handleTagChange}/>~2개월 이내</label></li>
          <li><label><input type="radio" name="term" value="~3개월 이내" onChange={handleTagChange}/>~3개월 이내</label></li>
        </ul>
        <ul>
          <li><label><input type="radio" name="headCnt" value="1~2인" onChange={handleTagChange}/>1~2인</label></li>
          <li><label><input type="radio" name="headCnt" value="3~4인" onChange={handleTagChange}/>3~4인</label></li>
          <li><label><input type="radio" name="headCnt" value="5~6인" onChange={handleTagChange}/>5~6인</label></li>
          <li><label><input type="radio" name="headCnt" value="6인~" onChange={handleTagChange}/>6인~</label></li>
        </ul>
        <ul> 
          <li><label><input type="radio" name="role" value="프론트엔드" onChange={handleTagChange}/>프론트엔드</label></li>
          <li><label><input type="radio" name="role" value="백엔드" onChange={handleTagChange}/>백엔드</label></li>
        </ul>
        <ul>
          <li><label><input type="checkbox" name="lang" value="C" onChange={handleTagChange}/>C</label></li>
          <li><label><input type="checkbox" name="lang" value="C++" onChange={handleTagChange}/>C++</label></li>
          <li><label><input type="checkbox" name="lang" value="JAVA" onChange={handleTagChange}/>JAVA</label></li>
          <li><label><input type="checkbox" name="lang" value="Python" onChange={handleTagChange}/>Python</label></li>
        </ul>
      </div>

      <textarea 
        cols={30}
        rows={10}
        ref={textareaRef}
      ></textarea>
      <button onClick={handleSubmit}>작성</button>
    </ContainerBox>
  )
}

export default CreateProject

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  
  > input {
    margin-top: 100px;
    padding-left: 12px;
    height: 45px;
    font-size: 18px;
    border-radius: 15px;
    border: solid 1px rgb(185, 185, 185);  
  }

  > span {
    margin-top: 20px;
    color: red;
    font-weight: bold;
  }
  
  > div {
    display: flex;
    ul {
      width: 160px;
      height: 100px;
      overflow: auto;
    } 
    li {
      list-style: none;
      height: 30px;
    }
  }
  
  textarea {
      margin-top: 20px;
      padding: 14px;
      resize: none;
      font-size: 18px;
      border-radius: 10px;
      border: solid 1px rgb(185, 185, 185);
    }
`