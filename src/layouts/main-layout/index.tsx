import React from "react"
import { Layout } from "antd"
import GlobalStyle from "theme/globalStyles"
import styled from "styled-components"
import { LeftMenu } from "./components/LeftMenu"

const { Content } = Layout

const LayoutContent = styled(Layout)`
  padding: 20px;
`

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <LeftMenu />
        <LayoutContent>
          <Content>{children}</Content>
        </LayoutContent>
      </Layout>
    </div>
  )
}
