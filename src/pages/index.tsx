import React, { ReactElement } from "react"
import {
  Row,
  Col,
  Typography,
  Avatar,
  Carousel,
  Timeline,
  Divider,
  Tag,
  Image,
} from "antd"
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
  .ant-carousel .slick-dots {
    bottom: -40px !important;
  }
  .ant-carousel .slick-dots li button {
    background: #000000;
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
            <div>
              <Text>Expected Salary 50K</Text>
            </div>
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
            <div>
              <Text>Date of birth: 22 / 03 / 1996</Text>
            </div>
          </Col>
        </Row>
      </Wrapper>
      <Row justify="center" style={{ marginBottom: "32px" }}>
        <Col>
          <Title level={5}>Portfolio</Title>
        </Col>
      </Row>
      <WhiteBox style={{ marginBottom: "32px" }}>
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
                src="images/icons/revhere.png"
                alt="revhere-logo"
                size={20}
              />
            </div>
            <div>
              <a
                href="https://github.com/boatnoodle/revhere"
                target="_blank"
                style={{ fontSize: "10px" }}
              >
                View source code
              </a>
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
                src="images/icons/next-js.svg"
                size={20}
                alt="next-js"
              />
              <Avatar src="images/icons/graphql.svg" size={20} alt="graphql" />
              <Avatar src="images/icons/ant-design.svg" size={20} alt="antd" />
            </div>
          </Col>
          <Col>
            <div>
              <a
                href="https://goaboatnoodle.netlify.app/"
                target="_blank"
                style={{ color: "#97266d" }}
              >
                Streetfood
              </a>{" "}
              <Avatar src="images/icons/github.svg" alt="github" size={20} />
            </div>
            <div>
              <a
                href="https://github.com/boatnoodle/streetfood"
                target="_blank"
                style={{ fontSize: "10px" }}
              >
                View source code
              </a>
            </div>
            <div>
              <TextSm>
                I created this app to use in my boat noodles restaurant.
              </TextSm>
            </div>
            <div>
              <Avatar
                shape="square"
                src="images/icons/react.svg"
                size={20}
                alt="next-js"
              />
              <Avatar
                src="images/icons/firebase.png"
                size={20}
                alt="firebase"
              />
              <Avatar
                src="images/icons/material-ui.png"
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
              <Avatar src="images/icons/github.svg" alt="github" size={20} />
            </div>
            <div>
              <a
                href="https://github.com/boatnoodle/covid-workout-daily"
                target="_blank"
                style={{ fontSize: "10px" }}
              >
                View source code
              </a>
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
                src="images/icons/react.svg"
                size={20}
                alt="react"
              />
              <Avatar
                src="images/icons/firebase.png"
                size={20}
                alt="firebase"
              />
              <Avatar src="images/icons/ant-design.svg" size={20} alt="antd" />
            </div>
          </Col>
        </Row>
      </WhiteBox>

      <Row justify="center" style={{ marginBottom: "32px" }}>
        <Col>
          <Text>
            My Skills, I usaually use the Next JS with graphql for frontend. And
            using the Nest js for the backend.
          </Text>
        </Col>
      </Row>
      <div style={{ marginBottom: "60px" }}>
        <CarouselStyled autoplay>
          <div>
            <Row justify="space-around" align="bottom">
              <Col>
                <img src="images/icons/react.svg" width={40} height={40} />
                <Text>React</Text>
              </Col>
              <Col>
                <img src="images/icons/next-js.svg" width={40} height={40} />
                <Text>Next JS</Text>
              </Col>
              <Col>
                <img src="images/icons/typescript.png" width={40} height={40} />
                <Text>Typescript</Text>
              </Col>
              <Col>
                <img src="images/icons/apollo.svg" width={40} height={40} />
                <Text>Apollo client</Text>
              </Col>
              <Col>
                <img src="images/icons/graphql.svg" width={40} height={40} />
                <Text>Graphql</Text>
              </Col>
              <Col>
                <img src="images/icons/nest-js.png" width={40} height={40} />
                <Text>Nest JS</Text>
              </Col>
              <Col>
                <img src="images/icons/mongodb.svg" width={40} height={40} />
                <Text>Mongodb</Text>
              </Col>
            </Row>
          </div>
          <div>
            <Row justify="space-around" align="bottom">
              <Col>
                <img src="images/icons/firebase.png" width={40} height={40} />
                <Text>Firebase</Text>
              </Col>
              <Col>
                <img
                  src="images/icons/github-actions.svg"
                  width={40}
                  height={40}
                />
                <Text>Github Action</Text>
              </Col>
              <Col>
                <img src="images/icons/docker.png" width={40} height={40} />
                <Text>Docker</Text>
              </Col>
              <Col>
                <img
                  src="images/icons/digitalocean.svg"
                  width={40}
                  height={40}
                />
                <Text>Digital ocean</Text>
              </Col>
              <Col>
                <img src="images/icons/netlify.svg" width={40} height={40} />
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
      <WhiteBox style={{ marginBottom: "32px" }}>
        <Row justify="center">
          <Col>
            <Timeline>
              <Timeline.Item color="green">
                <Row align="middle" gutter={16}>
                  <Col>
                    <img src="images/icons/fm.svg" width={40} height={40} />
                  </Col>
                  <Col>
                    <Text style={{ color: "#97266d" }}>Future makers</Text>
                  </Col>
                  <Col>
                    <Text>FullStack Developer - Full-time</Text>
                  </Col>
                  <Col>
                    <TextSm type="success">Jan 2020 - Present</TextSm>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Tag color="green">Typescript</Tag>
                    <Tag color="green">Next Js</Tag>
                    <Tag color="green">Antd</Tag>
                    <Tag color="green">Graphql</Tag>
                    <Tag color="green">Nest Js</Tag>
                    <Tag color="green">Mongodb</Tag>
                  </Col>
                </Row>
              </Timeline.Item>
              <Timeline.Item>
                <Row align="middle" gutter={16}>
                  <Col>
                    <img
                      src="images/icons/eventpop.jpeg"
                      width={40}
                      height={40}
                    />
                  </Col>
                  <Col>
                    <Text style={{ color: "#97266d" }}>Eventpop</Text>
                  </Col>
                  <Col>
                    <Text>Web developer - Full-time</Text>
                  </Col>
                  <Col>
                    <TextSm type="secondary">Aug 2019 - Dec20219</TextSm>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Tag color="green">Ruby on rails</Tag>
                    <Tag color="green">React Js</Tag>
                    <Tag color="green">Postgresql</Tag>
                  </Col>
                </Row>
              </Timeline.Item>
              <Timeline.Item style={{ padding: 0 }}>
                <Row align="middle" gutter={16}>
                  <Col>
                    <img
                      src="images/icons/blueseas.png"
                      width={40}
                      height={40}
                    />
                  </Col>
                  <Col>
                    <Text style={{ color: "#97266d" }}>
                      Blueseas enterpise Co., Ltd.
                    </Text>
                  </Col>
                  <Col>
                    <Text>Frontend Developer - Full-time</Text>
                  </Col>
                  <Col>
                    <TextSm type="secondary">Jul 2018 - Jul 2019</TextSm>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Tag color="green">React Js</Tag>
                    <Tag color="green">Ruby on rails</Tag>
                    <Tag color="green">Postgresql</Tag>
                  </Col>
                </Row>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </WhiteBox>
      <Row justify="center">
        <Col>
          <Title level={5}>Education</Title>
        </Col>
      </Row>
      <WhiteBox>
        <Row>
          <Col>
            <Text style={{ color: "#97266d" }}>2014 - 2016</Text>
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col>
            <img src="/images/icons/pkvc.jpeg" width={40} height={40} />
          </Col>
          <Col>
            <Title level={5}>Phuket Vocational College</Title>
          </Col>
          <Col>
            <Text>High Vocational Certificate</Text>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col>
            <Text style={{ color: "#97266d" }}>2014 - 2015</Text>
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col>
            <img src="/images/icons/ramkamhang.png" width={40} height={40} />
          </Col>
          <Col>
            <Title level={5}>Ramkhamhaeng University</Title>
          </Col>
          <Col>
            <Text> Bachelor of Business Administration (Predegree)</Text>
          </Col>
        </Row>
      </WhiteBox>
      <Row justify="center">
        <Col>
          <Title level={5}>Show off</Title>
        </Col>
      </Row>
      <WhiteBox>
        <Row justify="center">
          <Col span={24}>
            <CarouselStyled autoplay>
              <div>
                <Image src="/images/revhere-1.png" height="500px" />
              </div>
              <div>
                <Image src="/images/revhere-2.png" height="500px" />
              </div>
              <div>
                <Image src="/images/revhere-3.png" height="500px" />
              </div>
              <div>
                <Image src="/images/streetfood.png" height="500px" />
              </div>
            </CarouselStyled>
          </Col>
        </Row>
      </WhiteBox>
    </MainLayout>
  )
}

export default CvPage
