import React from 'react'
import './SeekProject.scss'

const Board = () => {
  return (
    <div className='board-content'>
      <div className='category'>
        <div>
          <span>기간</span>
          <button>기간</button>
        </div>
        <div>
          <span>인원</span>
          <button>인원</button>
        </div>
        <div>
          <span>역할</span>
          <button>역할</button>
        </div>
        <div>
          <span>ㅇㅇ</span>
          <button>ㅇㅇ</button>
        </div>
      </div>

      <div className='content-title'>
        <span>프로젝트 구해요 👋</span>
        <div>
          <button>F5</button>
          <button>모집글만</button>
          <button>글쓰기</button>
        </div>
      </div>
      
      <div className='items'>
        <div className='item'>
          <span>같이 하실 분</span>
          <span>Lorem ipsum dolor sit amet consectetur</span>
          <div>
            <span>작성자👴</span>
            <span>2023.09.01</span>
          </div>
          <div>
            <div>1개월</div>
            <div>3~4인</div>
            <div>프론트엔드</div>
          </div>
        </div>
        <div className='item'>
          <span>같이 하실 분</span>
          <span>Lorem ipsum dolor sit amet consectetur</span>
          <div>
            <span>작성자👴</span>
            <span>2023.09.01</span>
          </div>
          <div>
            <div>1개월</div>
            <div>3~4인</div>
            <div>프론트엔드</div>
          </div>
        </div>
        <div className='item'>
          <span>같이 하실 분</span>
          <span>Lorem ipsum dolor sit amet consectetur</span>
          <div>
            <span>작성자👴</span>
            <span>2023.09.01</span>
          </div>
          <div>
            <div>1개월</div>
            <div>3~4인</div>
            <div>프론트엔드</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board