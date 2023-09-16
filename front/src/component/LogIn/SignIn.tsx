import React, { useState, Dispatch, SetStateAction } from 'react'

import './SignIn.scss'

interface Props {
  setActiveLink : Dispatch<SetStateAction<string>>
}

const SignIn: React.FC<Props> = (props) => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    <div className='signin-container'>
      <span>로그인</span>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={onChangeId}/> 
        <input type="password" onChange={onChangePassword}/>
        <button type="submit">로그인</button>
      </form>
      <div className='member-question'>
        <span>아직 회원이 아니신가요?</span>
        <span onClick={goToSignUp}>회원가입</span>
      </div>
      <button>카카오</button>
      <button>구  글</button>
    </div>
  )
}

export default SignIn