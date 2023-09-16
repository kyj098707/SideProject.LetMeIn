import React, { useState } from 'react'
import SignIn from '../../component/LogIn/SignIn'
import SignUp from '../../component/LogIn/SignUp'
import './LogIn.scss'

const LogIn = () => {
  const [activeLink, setActiveLink] = useState('signIn')

  return (
    <div className='login-container'>
      <div className='title'>Let Me In</div>
      <div className='content'>
        <div className='logo'></div>
        {
          {
            'signIn': <SignIn setActiveLink={setActiveLink}/>,
            'signUp': <SignUp setActiveLink={setActiveLink}/>
          }[activeLink]
        }
      </div>
    </div>
  )
}

export default LogIn