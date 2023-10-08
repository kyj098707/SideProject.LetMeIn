import React, { SetStateAction, useState } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
import { Project } from '../model/type'

interface props {
  modalOpen: boolean,
  setModalOpen: React.Dispatch<SetStateAction<boolean>>,
  item: Project,
}

const ProjectModal: React.FC<props> = (props) => {  
  const closeModal = () => {
    props.setModalOpen(false)
  }
  const item = props.item

  return (
    <NewModal
      open={props.modalOpen}
      centered={true}
      onCancel={closeModal}
      footer={null}
      width={650}
    >
      <div id='modal-content'>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <div className='user'>
          <div>
            <span>{item.name}</span>
            <span>{item.genDate}</span>
          </div>
          <div className='btns'>
            <span>수정</span>
            <span>삭제</span>
          </div>
        </div>
        <div className='tag'>
          <div>{item.tag.headCnt}</div>
          <div>{item.tag.term}</div>
          <div>{item.tag.role}</div>
        </div>
      </div>
    </NewModal>
  )
}

export default ProjectModal

const NewModal = styled(Modal)`
  #modal-content{
    > p {
      margin: 0 0 40px;
    }
    > div {
      display: flex;
    }

    .user {
      justify-content: space-between;
      padding-bottom: 20px;
      margin-bottom: 15px;
      border-bottom: solid 1px rgb(210, 210, 210);

      .btns span {
        padding: 0 15px;
      }
    }

    .tag {
      div {
        padding: 5px 10px;
        margin: 0 10px 10px 0;
        color: whitesmoke;
        border-radius: 15px;
        &:nth-child(1) { background-color: #d072ff; }
        &:nth-child(2) { background-color: #c145ff; }
        &:nth-child(3) { background-color: #b218ff; }
      }
    }
  }
`