import React from 'react'
import SignIn from '../../component/LogIn/SignIn'
import SignUp from '../../component/LogIn/SignUp'
import './LogIn.scss'

const LogIn = () => {
  return (
    <div className='login-container'>
      <div className='title'>Let Me In</div>
      <div className='content'>
        <div className='logo'></div>
        <SignIn />
        {/* <SignUp /> */}
      </div>
    </div>
  )
}

export default LogIn