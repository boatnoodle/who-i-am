import React from "react"
import { Layout } from "antd"
import GlobalStyle from "../../theme/globalStyles"
import styled from "styled-components"

const { Footer, Sider, Content } = Layout

const SiderStyled = styled(Sider)`
  position: fixed;
  top: 0;
  left: 0;
  background: #27282b;
  height: 100vh;
`

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <SiderStyled></SiderStyled>
        <Layout>
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
