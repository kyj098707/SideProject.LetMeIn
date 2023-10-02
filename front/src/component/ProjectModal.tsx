import React, { SetStateAction, useState } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'

const customStyles = {
  width: '700px',
  height: '400px',
}

interface props {
  modalOpen: boolean,
  setModalOpen: React.Dispatch<SetStateAction<boolean>>,
}

const ProjectModal: React.FC<props> = (props) => {  
  const closeModal = () => {
    props.setModalOpen(false)
  }

  return (
    <Modal
      open={props.modalOpen}
      centered={true}
      onCancel={closeModal}
      footer={null}
      bodyStyle={customStyles}
    >
      <h2>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>inside</button>
      </form>
    </Modal>
  )
}

export default ProjectModal