import React, { useState } from 'react'
import styled from 'styled-components'
import SignIn from '../../component/LogIn/SignIn'
import SignUp from '../../component/LogIn/SignUp'

// 나중에 지울 코드 : ㅅㅈㅍ
import { useDispatch, useSelector } from 'react-redux'
import { changeTrue, changeFalse } from '../../store/NavSlice'
import { RootState } from '../../store/store'
// 나중에 지울 코드 : ㅅㅈㅍ

const LogIn: React.FC = () => {
  const [activeLink, setActiveLink] = useState('signIn')

  // 나중에 지울 코드
  const navFlag = useSelector((state: RootState) => state.flag.navFlag);
  const dispatch = useDispatch();
  console.log(navFlag);
  dispatch(changeFalse())
  console.log(navFlag);
  // 나중에 지울 코드

  return (
    <ContainerBox>
      <TitleBox>Let Me In</TitleBox>
      <ContentBox>
        <LogoBox />
        {
          {
            'signIn': <SignIn setActiveLink={setActiveLink}/>,
            'signUp': <SignUp setActiveLink={setActiveLink}/>
          }[activeLink]
        }
      </ContentBox>
    </ContainerBox>
  )
}

export default LogIn

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleBox = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const ContentBox = styled.div`
  display: flex;
  margin-top: 70px;
  width: 800px;
  height: 500px;
  border: solid 1px black;
`

const LogoBox = styled.div`
  width: 50%;
  background-color: #54AEFF;
`