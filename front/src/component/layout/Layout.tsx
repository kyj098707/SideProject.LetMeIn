import React, { ReactNode } from 'react'
import { LayoutColBox, LayoutRowBox, ContentBox } from './Layout.style'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children:ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <LayoutColBox>
      <Header />

      <LayoutRowBox>
        <ContentBox>
          {children}
        </ContentBox>
      </LayoutRowBox>

      <Footer />
    </LayoutColBox>
  )
}

export default Layout