import React from 'react'
import { Navigate } from 'react-router-dom'
// import { Modal } from 'antd'

import { Project } from '../../model/type'
import './MyProject.scss'

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

const MyProject: React.FC = () => {
  return (
    <div className='myproject-container'>
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

export default MyProject