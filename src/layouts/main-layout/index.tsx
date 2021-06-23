import React from "react"
import { Layout } from "antd"
import GlobalStyle from "theme/globalStyles"
import styled from "styled-components"
import { LeftMenu } from "./components/LeftMenu"

const { Content } = Layout

const LayoutContent = styled(Layout)`
  padding: 20px;
  background: #f1f1f1;
`

interface Props {
  onClickPrintCV: () => void
}

export const MainLayout: React.FC<Props> = ({ children, onClickPrintCV }) => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <LeftMenu onClickPrintCV={onClickPrintCV} />
        <LayoutContent>
          <Content>{children}</Content>
        </LayoutContent>
      </Layout>
    </div>
  )
}
