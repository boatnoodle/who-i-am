import React, { ReactElement, useState } from "react"
import { Button } from "antd"
import { MainLayout } from "layouts/main-layout"

interface Props {}

function Index(_props: Props): ReactElement {
  return (
    <MainLayout>
      <Button>click me</Button>
    </MainLayout>
  )
}

export default Index
