import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Modal from 'react-modal'
import styled from 'styled-components'

import { Project } from '../../model/type'

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
    <ContainerBox>
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
    </ContainerBox>
  )
}

export default MyProject

const ContainerBox = styled.div`
  display: flex;
  margin-top: 100px;
  width: 1150px;
  flex-wrap: wrap;

  .item {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    padding: 20px;
    margin: 0 48px 40px 0;
    width: 310px;
    border-radius: 10px;
    border: solid 1px rgb(220, 220, 220);
    transition: all 0.25s ease;

    &:nth-child(3n+3) {
      margin-right: 0;
    }
    
    > span:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
    }
    > div:last-child {
      display: flex;
      > div{
        margin-right: 10px;
      }
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`