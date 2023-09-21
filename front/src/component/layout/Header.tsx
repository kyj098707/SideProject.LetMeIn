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
    </HeaderBox>
  )
}

export default Header