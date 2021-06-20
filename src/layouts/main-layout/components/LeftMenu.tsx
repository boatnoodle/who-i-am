import React from "react"
import {
  Avatar,
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Divider,
  Menu,
} from "antd"
import {
  MailOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons"
import styled from "styled-components"
import { Link } from "gatsby"

const { Sider } = Layout
const { Title } = Typography

const SiderStyled = styled(Sider)`
  flex: 0 0 20% !important;
  max-width: unset !important;
  background: #27282b;
  height: 100vh;
  padding: 20px 0;

  a {
    color: white;
  }
`

const WrapperMenuLeft = styled.div`
  display: grid;
  padding: 20px;
  row-gap: 12px;
`

export const LeftMenu: React.FC = () => {
  return (
    <SiderStyled>
      <Row justify="center">
        <Col>
          <Space size={`small`} direction="vertical">
            <Row justify="center">
              <Col>
                <Avatar size={100} src="/images/my-image.jpg" />
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Title style={{ color: "white", margin: 0 }} level={4}>
                  Nattasit Moonchanabaht
                </Title>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Button
                  type="link"
                  href="https://web.facebook.com/NattasitNatBkk"
                  icon={<FacebookOutlined />}
                  target="_blank"
                />
              </Col>
              <Col>
                <Button
                  type="link"
                  href="mailto:nattasit31@gmail.com"
                  icon={<MailOutlined />}
                  target="_blank"
                />
              </Col>
              <Col>
                <Button
                  type="link"
                  href="https://github.com/boatnoodle"
                  icon={<GithubOutlined />}
                  target="_blank"
                />
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider
            style={{
              borderTop: "1px solid hsla(0,0%,100%,.06)",
              boxShadow: "0 -1px 0 0 #1d1e21",
            }}
          />
        </Col>
      </Row>
      <WrapperMenuLeft>
        <Row>
          <Col>
            <Link to="/cv" type="link" style={{ color: "white" }}>
              CV
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/blog" type="link" style={{ color: "white" }}>
              Blog
            </Link>
          </Col>
        </Row>
      </WrapperMenuLeft>
    </SiderStyled>
  )
}
