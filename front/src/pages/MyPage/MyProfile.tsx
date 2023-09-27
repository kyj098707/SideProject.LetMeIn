import React, { useState } from 'react'
import Profile from '../../component/MyPage/Profile'
import MyProject from '../../component/MyPage/MyProject'
import ReqApply from '../../component/MyPage/ReqApply'
import styled from 'styled-components'

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 19px;
  font-weight: bold;
`
const MyPageHeaderBox = styled(CenterBox)`
  
`
const HeaderItem = styled(CenterBox)`
  margin: 50px 30px;
`

const MyProfile:React.FC = () => {
  const [activeLink, setActiveLink] = useState('profile')

  return (
    <>
      <MyPageHeaderBox>
        <HeaderItem onClick={()=>setActiveLink('profile')}>프로필</HeaderItem>
        <HeaderItem onClick={()=>setActiveLink('myproject')}>내 프로젝트</HeaderItem>
        <HeaderItem onClick={()=>setActiveLink('reqapply')}>신청 현황</HeaderItem>
        <HeaderItem onClick={()=>setActiveLink('')}>찜한 목록</HeaderItem>
      </MyPageHeaderBox>

      {
        {
          'profile': <Profile />,
          'myproject': <MyProject />,
          'reqapply': <ReqApply />,
        }[activeLink]
      }
    </>
  )
}

export default MyProfile