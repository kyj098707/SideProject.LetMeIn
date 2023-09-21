import React from 'react';
import styled from 'styled-components';

export const LayoutColBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const LayoutRowBox = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContentBox = styled.div`
  // Todo: padding 또는 margin 값을 주면 SideBar가 작아짐 : css충돌나는듯.. px과 관련있을듯함.
  // padding: 5%;
`