import React from 'react'

import './SignIn.scss'

const SignIn = () => {
  return (
    <div className='signin-container'>
      <span>로그인</span>
      <input type="text" /> 
      <input type="text" />
      <button>로그인</button>
      <div className='member-question'>
        <span>아직 회원이 아니신가요? </span>
        <span> 회원가입</span>
      </div>
      <button>카카오</button>
      <button>구  글</button>
    </div>
  )
}

export default SignIn