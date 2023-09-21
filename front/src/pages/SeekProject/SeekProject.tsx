import React from 'react'
import { Link } from 'react-router-dom'
import {Project} from '../../model/type'
import './SeekProject.scss'


let data: Project[] =[
  {
    state: true,
    title: "같이 하실 분",
    desc: "Lorem ipsum dolor sit amet consectetur",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    state: true,
    title: "같이 하실 분",
    desc: "Lorem ipsum dolor sit amet consectetur",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    state: true,
    title: "같이 하실 분",
    desc: "Lorem ipsum dolor sit amet consectetur",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    state: true,
    title: "같이 하실 분",
    desc: "Lorem ipsum dolor sit amet consectetur",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    state: true,
    title: "같이 하실 분",
    desc: "Lorem ipsum dolor sit amet consectetur",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
]


const Board = () => {
  return (
    <div className='board-content'>
      <div className='category'>
        <div>
          <span>기간</span>
          <button>기간</button>
        </div>
        <div>
          <span>인원</span>
          <button>인원</button>
        </div>
        <div>
          <span>역할</span>
          <button>역할</button>
        </div>
        <div>
          <span>ㅇㅇ</span>
          <button>ㅇㅇ</button>
        </div>
      </div>

      <div className='content-title'>
        <span>프로젝트 구해요 👋</span>
        <div>
          <button>F5</button>
          <button>모집글만</button>
          <button><Link to='/createproject'>글쓰기</Link></button>
          <button><Link to='/myproject'>내 프로젝트(임시)</Link></button>
          <button><Link to='/reqapply'>신청현황(임시)</Link></button>
          <button><Link to='/login'>로그인(임시)</Link></button>
        </div>
      </div>
      
      <div className='items'>
        {(
          data.map((item, idx) => {
            const {state, title, desc, name, genDate} = item
            const {headCnt, term, role} = item.tag

            return (
              <div className='item'>
                <span>{title}</span>
                <span>{desc}</span>
                <div>
                  <span>{name}</span>
                  <span>{genDate}</span>
                </div>
                <div>
                  <div>{term}</div>
                  <div>{headCnt}</div>
                  <div>{role}</div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Board