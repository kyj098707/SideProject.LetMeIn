import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Project} from '../../model/type'
import ProjectModal from '../../component/ProjectModal'

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


const Board = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [item, setItem] = useState<Project>(data[0])

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
    setModalOpen(true)
    setItem(data[Number(e.currentTarget.id)-1])
  }

  return (
    <ContainerBox>
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
          <button><Link to='/login'>로그인(임시)</Link></button>
        </div>
      </div>
      
      <ProjectModal modalOpen={modalOpen} setModalOpen={setModalOpen} item={item}/>

      <div className='items'>
        {(
          data.map((item, idx) => {
            const {postNum, state, title, desc, name, genDate} = item
            const {headCnt, term, role} = item.tag

            return (
              <div className='item'
                   onClick={handleOpenModal}
                   id={String(postNum)}>
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
    </ContainerBox>
  )
}

export default Board

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 100px;

    > div {
      width:25%;
      text-align: center;
    }
  }

  .content-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
  }

  .items {
    display: flex;
    margin-top: 100px;
    width: 1155px;
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
  }
`