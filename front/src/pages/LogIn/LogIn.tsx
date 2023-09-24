import React, { useState } from 'react'
import SignIn from '../../component/LogIn/SignIn'
import SignUp from '../../component/LogIn/SignUp'
import './LogIn.scss'

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