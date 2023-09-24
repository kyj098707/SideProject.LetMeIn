import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Header = () => {
  return (
    <HeaderBox>
      <FontAwesomeIcon icon={faBars} />
      <p>여기에 무엇을 넣으면 좋을지 고민입니다.</p>
    </HeaderBox>
  )
}

export default Header