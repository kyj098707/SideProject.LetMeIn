import React from 'react'
import styled from 'styled-components'

const ReqApply = () => {
  return (
    <ContainerBox className='ReqCurSit-container'>
      <div>
        <span>신청한 현황입니다 👋</span>
        <button>F5</button>
        <button>신청 받았어요</button>
      </div>
      
      <ItemBox>
        <span>'프로젝트 하실 분~' 프로젝트에 가입 신청을 하였습니다.</span>
        <span>가입 신청 결과를 기다려 주세요</span>
        <ItemBtnBox>
          <ItemBtn>프로필</ItemBtn>
          <ItemBtn>게시물</ItemBtn>
        </ItemBtnBox>
      </ItemBox>
    </ContainerBox>
  )
}

export default ReqApply

const ContainerBox = styled.div`
  
`

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px rgb(223, 223, 223);
`

const ItemBtnBox = styled.div`
  display: flex;
`

const ItemBtn = styled.div`
  text-align: center;
  width: 50%;
`