import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Modal from 'react-modal'

import { Project } from '../../model/type'
import './MyProject.scss'

let data: Project[] =[
  {
    postNum: 1,
    state: true,
    title: "같이 하실 분1",
    desc: "Lorem ipsum dolor sit amet consectetur ioicn skyep",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    postNum: 2,
    state: true,
    title: "같이 하실 분2",
    desc: "Lorem ipsum dolor sit amet consectetur ioicn skyep",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    postNum: 3,
    state: true,
    title: "같이 하실 분3",
    desc: "Lorem ipsum dolor sit amet consectetur ioicn skyep",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    postNum: 4,
    state: true,
    title: "같이 하실 분4",
    desc: "Lorem ipsum dolor sit amet consectetur ioicn skyep",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
  {
    postNum: 5,
    state: true,
    title: "같이 하실 분5",
    desc: "Lorem ipsum dolor sit amet consectetur ioicn skyep",
    name: "작성자👴",
    genDate: "2023.09.01",
    tag: {
      headCnt: "3~4인",
      term: "1개월",
      role: "프론트엔드",
    },
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MyProject: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const isOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpen(true)
    
    console.log(e.currentTarget.id)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className='myproject-container'>
      <div className='items'>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>inside</button>
          </form>
        </Modal>

          {(
            data.map((item, idx) => {
              const {postNum, state, title, desc, name, genDate} = item
              const {headCnt, term, role} = item.tag

              return (
                <div className='item'
                     onClick={isOpenModal}
                     id={String(postNum)}
                >
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