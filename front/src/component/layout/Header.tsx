import React, { useState } from 'react'
import { GithubOutlined, CommentOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { HeaderBox } from './Layout.style'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const mouseEnter = () => {
    setVisible(true)
  }
  
  const mouseLeave = () => {
    setVisible(false)
  }

  return (
    <HeaderBox>

      <GithubOutlined style={{fontSize:'40px'}}/>
      <Link to='/'>프로젝트 구해요</Link>
      <LogoBox>
        <CommentOutlined style={{fontSize:'40px', marginLeft:'55%', marginRight:'55%'}}/>
        
        <div >
        <LogInMenu
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}/>
        </div>
        {visible && 
        <TEMP>
          <div id='tooltipItem'>
            <div>로그인</div>
            <div>회원가입</div>
          </div>
        </TEMP>}
        <Space size={16} wrap>
          <Avatar
            icon={<UserOutlined />}
            size={40}
            onClick={()=>navigate('/mypage')}
          />
        </Space>
      </LogoBox>
    </HeaderBox>
  )
}

export default Header


const LogInMenu = styled(MenuOutlined)`
  margin-right: 15%;
  font-size: 40px;
`

const TEMP = styled.div`
  /* display: none; */
  position: absolute;
  width: 90px;
  height: 95px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.25);
  z-index: 5;
  transform: translate(148px, 20px);

  #tooltipItem {
    width: 94%;
    height: 94%;
    
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;
      font-weight: bold;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
      }
    }
  }
`

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;

  /* ${LogInMenu}:hover + ${TEMP} {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`