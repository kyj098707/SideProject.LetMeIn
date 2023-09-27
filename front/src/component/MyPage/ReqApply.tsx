import React from 'react'
import './ReqApply.scss'

const ReqApply = () => {
  return (
    <div className='ReqCurSit-container'>
      <div>
        <span>신청한 현황입니다 👋</span>
        <button>F5</button>
        <button>신청 받았어요</button>
      </div>
      
      <div className='item'>
        <span>'프로젝트 하실 분~' 프로젝트에 가입 신청을 하였습니다.</span>
        <span>가입 신청 결과를 기다려 주세요</span>
        <div className='btns'>
          <div>프로필</div>
          <div>게시물</div>
        </div>
      </div>
    </div>
  )
}

export default ReqApply