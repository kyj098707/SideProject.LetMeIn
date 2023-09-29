import React, { useState, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  setActiveLink : Dispatch<SetStateAction<string>>
}

const SignIn: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate('/')
    
    console.log(id, password)
  }

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const goToSignUp = () => {
    props.setActiveLink('signUp')
  }
  
  return (
    <ContainerBox>
      <TitleSpan>로그인</TitleSpan>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput type="text" placeholder="아이디" onChange={onChangeId}/> 
        <LoginInput type="password" placeholder="비밀번호" onChange={onChangePassword}/>
        <LoginBtn type="submit">로그인</LoginBtn>
      </LoginForm>
      <MemberQuestionBox>
        <MQSpan>아직 회원이 아니신가요?</MQSpan>
        <MQSpan onClick={goToSignUp}>회원가입</MQSpan>
      </MemberQuestionBox>
      <OAuthBtn>카카오</OAuthBtn>
      <OAuthBtn>구  글</OAuthBtn>
    </ContainerBox>
  )
}

export default SignIn

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const TitleSpan = styled.span`
  margin: 35px 0;
  font-size: 20px;
  font-weight: bold;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const LoginInput = styled.input`
  margin-bottom: 20px;
  padding-left: 10px;
  height: 35px;
  border-radius: 7px;
  border: solid 1px black;
`

const LoginBtn = styled.button`
  height: 40px;
  color: white;
  border: none;
  border-radius: 7px;
  background-color: #582BEB;
  &:hover {
    cursor: pointer;
  }
`

const MemberQuestionBox = styled.div`
  display: flex;
  margin: 40px 0;
`

const MQSpan = styled.span`
  &:last-child {
    cursor: pointer;
    margin-left: 10px;
    color: blue;
  }
`

const OAuthBtn = styled.button`
  margin-bottom: 20px;
  width: 60%;
  height: 40px;
`