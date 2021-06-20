import React, { ReactElement } from "react"
import { Row, Col, Typography, Avatar, Carousel, Timeline } from "antd"
import { MainLayout } from "layouts/main-layout"
import styled from "styled-components"

const { Title, Text } = Typography

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 20px;

  .ant-col {
    img {
      margin: 0 auto;
    }
  }
`

export const WhiteBox = styled.div`
  width: grid;
  margin-bottom: 20px;
  padding: 20px;
  background: #ffffff;
`

const TextSm = styled(Text)`
  font-size: 10px;
`

const CarouselStyled = styled(Carousel)`
  & .ant-carousel .slick-dots-bottom {
    bottom: -40px !important;
  }
`

interface Props {}

function CvPage(_props: Props): ReactElement {
  return (
    <MainLayout>
      <Wrapper>
        <Row gutter={16} justify="center">
          <Col style={{ textAlign: "center" }}>
            <Title level={5} style={{ margin: 0 }}>
              Nattasit Moonchanabaht
            </Title>
            <Text>Fullstack developper</Text>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Avatar src="images/my-image.jpg" size={100} />
          </Col>

          <Col style={{ textAlign: "center" }}>
            <div>
              <Text style={{ margin: 0 }}>Email: nattasit31@gmail.com</Text>
            </div>
            <div>
              <Text style={{ margin: 0 }}>Phone: 094-450-9604</Text>
            </div>
          </Col>
        </Row>
      </Wrapper>
      <Row justify="center">
        <Col>
          <Title level={5}>Portfolio</Title>
        </Col>
      </Row>
      <WhiteBox>
        <Row justify="space-between">
          <Col>
            <div>
              <a
                href="https://revhere.vercel.app/"
                target="_blank"
                style={{ color: "#97266d" }}
              >
                Revhere
              </a>{" "}
              <Avatar
                src="images/revhere-logo.png"
                alt="revhere-logo"
                size={20}
              />
            </div>
            <div>
              <TextSm style={{ lineHeight: "0.5px" }}>
                This website has inspired by my friend idea. <br />
                To be the review website.
              </TextSm>
            </div>
            <div>
              <Avatar
                shape="square"
                src="images/next-js.svg"
                size={20}
                alt="next-js"
              />
              <Avatar src="images/graphql.svg" size={20} alt="graphql" />
              <Avatar src="images/ant-design.svg" size={20} alt="antd" />
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/boatnoodle/streetfood"
                target="_blank"
                style={{ color: "#97266d" }}
              >
                Streetfood
              </a>{" "}
              <Avatar src="images/github.svg" alt="github" size={20} />
            </div>
            <div>
              <TextSm>
                I created this app to use in my boat noodles restaurant.
              </TextSm>
            </div>
            <div>
              <Avatar
                shape="square"
                src="images/react.svg"
                size={20}
                alt="next-js"
              />
              <Avatar src="images/firebase.png" size={20} alt="firebase" />
              <Avatar
                src="images/material-ui.png"
                size={20}
                alt="material-ui"
              />
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://github.com/boatnoodle/covid-workout-daily"
                target="_blank"
                style={{ color: "#97266d" }}
              >
                Covid workout daily
              </a>{" "}
              <Avatar src="images/github.svg" alt="github" size={20} />
            </div>
            <div>
              <TextSm>
                This app created for tracking my daily workout routine. <br />
                But It's not completely yet.
              </TextSm>
            </div>
            <div>
              <Avatar
                shape="square"
                src="images/react.svg"
                size={20}
                alt="react"
              />
              <Avatar src="images/firebase.png" size={20} alt="firebase" />
              <Avatar src="images/ant-design.svg" size={20} alt="antd" />
            </div>
          </Col>
        </Row>
      </WhiteBox>
      <Row justify="center" style={{ marginBottom: "24px" }}>
        <Col>
          <Text>
            My Skills, I usaually use the Next JS with graphql for frontend. And
            using the Nest js for the backend.
          </Text>
        </Col>
      </Row>
      <div style={{ marginBottom: "32px" }}>
        <CarouselStyled autoplay>
          <div>
            <Row justify="space-around" align="bottom">
              <Col>
                <img src="images/react.svg" width={40} height={40} />
                <Text>React</Text>
              </Col>
              <Col>
                <img src="images/next-js.svg" width={40} height={40} />
                <Text>Next JS</Text>
              </Col>
              <Col>
                <img src="images/ts.png" width={40} height={40} />
                <Text>Typescript</Text>
              </Col>
              <Col>
                <img src="images/apollo.svg" width={40} height={40} />
                <Text>Apollo client</Text>
              </Col>
              <Col>
                <img src="images/graphql.svg" width={40} height={40} />
                <Text>Graphql</Text>
              </Col>
              <Col>
                <img src="images/nestjs.svg" width={40} height={40} />
                <Text>Nest JS</Text>
              </Col>
              <Col>
                <img src="images/mongodb.svg" width={40} height={40} />
                <Text>Mongodb</Text>
              </Col>
            </Row>
          </div>
          <div>
            <Row justify="space-around" align="bottom">
              <Col>
                <img src="images/firebase.png" width={40} height={40} />
                <Text>Firebase</Text>
              </Col>
              <Col>
                <img src="images/github-actions.svg" width={40} height={40} />
                <Text>Github Action</Text>
              </Col>
              <Col>
                <img src="images/docker.png" width={40} height={40} />
                <Text>Docker</Text>
              </Col>
              <Col>
                <img src="images/do-icon.png" width={40} height={40} />
                <Text>Digital ocean</Text>
              </Col>
              <Col>
                <img src="images/netlify.png" width={40} height={40} />
                <Text>Netlify</Text>
              </Col>
            </Row>
          </div>
        </CarouselStyled>
      </div>
      <Row justify="center">
        <Col>
          <Title level={5}>Work experiences</Title>
        </Col>
      </Row>
      <WhiteBox>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
      </WhiteBox>
    </MainLayout>
  )
}

export default CvPage
