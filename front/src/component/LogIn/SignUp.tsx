import React, { useState, Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'

interface Props {
  setActiveLink : Dispatch<SetStateAction<string>>
}

const SignUp: React.FC<Props> = (props) => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    nickname: "",
  })

  const goToSignIn = () => {
    props.setActiveLink('signIn')
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log(values)
    // props.setActiveLink('signIn')
  }

  return (
    <ContainerBox>
      <TitleSpan>회원가입</TitleSpan>
      <SignUpForm onSubmit={handleSubmit}>
        <SignUpInput 
          name="id" 
          type="text" 
          placeholder="아이디"
          onChange={handleChange}
        /> 
        <SignUpInput 
          name="password" 
          type="password" 
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <SignUpInput  type="password" placeholder="비밀번호 확인"/>
        <SignUpInput 
          name="nickname" 
          type="text" 
          placeholder="닉네임"
          onChange={handleChange}
        />
        <SignUpBtn type="submit">회원가입</SignUpBtn>
      </SignUpForm>
      <MemberQuestionBox>
        <MQSpan>회원이신가요?</MQSpan>
        <MQSpan onClick={goToSignIn}>로그인</MQSpan>
      </MemberQuestionBox>
    </ContainerBox>
  )
}

export default SignUp

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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const SignUpInput = styled.input`
  margin-bottom: 20px;
  padding-left: 10px;
  height: 35px;
  border-radius: 7px;
  border: solid 1px black;
`

const SignUpBtn = styled.button`
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