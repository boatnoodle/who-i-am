import React, { ReactElement, useState } from "react"
import { Button, Typography } from "antd"
import { MainLayout } from "layouts/main-layout"

const { Title } = Typography

interface Props {}

function CvPage(_props: Props): ReactElement {
  return (
    <MainLayout>
      <Title level={4}>Nice to meet you!</Title>
    </MainLayout>
  )
}

export default CvPage
