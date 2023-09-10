import React from 'react'

import './SignUp.scss'

const SignUp = () => {
  return (
    <div className='signup-container'>
      <span>회원가입</span>
      <input type="text" /> 
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>회원가입</button>
      <div className='member-question'>
        <span>회원이신가요? </span>
        <span> 로그인</span>
      </div>
    </div>
  )
}

export default SignUp