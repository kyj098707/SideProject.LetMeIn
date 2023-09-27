import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CommentOutlined, GithubOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { HeaderBox, LogoBox } from './Layout.style'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderBox>

      <GithubOutlined style={{fontSize:'40px'}}/>
      <Link to='/'>프로젝트 구해요</Link>
      <LogoBox>
        <CommentOutlined style={{fontSize:'40px', marginLeft:'55%', marginRight:'55%'}}/>
        <FontAwesomeIcon icon={faBars} style={{fontSize:'40px', marginRight:'15%'}}/>
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