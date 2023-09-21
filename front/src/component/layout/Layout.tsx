import React, { ReactNode } from 'react'
import { LayoutColBox, LayoutRowBox, ContentBox } from './Layout.style'
import Header from './Header'
import SideBar from './SideBar'

type LayoutProps = {
  children:ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <LayoutColBox>
      <Header />

      <LayoutRowBox>
        <SideBar />
        <ContentBox>
          {children}
        </ContentBox>
      </LayoutRowBox>
    </LayoutColBox>
  )
}

export default Layout