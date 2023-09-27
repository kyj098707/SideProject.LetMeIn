import React, { useState, Dispatch, SetStateAction} from 'react'

import './SignUp.scss'

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
    <div className='signup-container'>
      <span>회원가입</span>
      <form onSubmit={handleSubmit}>
        <input 
          name="id" 
          type="text" 
          placeholder="아이디"
          onChange={handleChange}
        /> 
        <input 
          name="password" 
          type="password" 
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <input  type="password" placeholder="비밀번호 확인"/>
        <input 
          name="nickname" 
          type="text" 
          placeholder="닉네임"
          onChange={handleChange}
        />
        <button type="submit">회원가입</button>
      </form>
      <div className="member-question">
        <span>회원이신가요?</span>
        <span onClick={goToSignIn}>로그인</span>
      </div>
    </div>
  )
}

export default SignUp