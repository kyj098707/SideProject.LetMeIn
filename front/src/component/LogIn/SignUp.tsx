import React, { useState, Dispatch, SetStateAction} from 'react'

import './SignUp.scss'

interface Props {
  setActiveLink : Dispatch<SetStateAction<string>>
}

const SignUp: React.FC<Props> = (props) => {
  const goToSignIn = () => {
    props.setActiveLink('signIn')
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.dir(e.target)

    // props.setActiveLink('signIn')
  }

  return (
    <div className='signup-container'>
      <span>회원가입</span>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="아이디"/> 
        <input type="password" placeholder="비밀번호"/>
        <input type="password" placeholder="비밀번호 확인"/>
        <input type="text" placeholder="닉네임"/>
        <button>회원가입</button>
      </form>
      <div className='member-question'>
        <span>회원이신가요?</span>
        <span onClick={goToSignIn}>로그인</span>
      </div>
    </div>
  )
}

export default SignUp