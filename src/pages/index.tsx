import { useReactToPrint } from "react-to-print"
import React, { ReactElement, useRef, useState } from "react"
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
  Button,
} from "antd"
import { MainLayout } from "layouts/main-layout"
import styled from "styled-components"
import { MyCvDocument } from "containers/MyCvDocument"

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

const WrapperCarousel = styled.div`
  margin-bottom: 60px;
  img {
    margin: 0 auto;
  }
`

const CarouselStyled = styled(Carousel).attrs((props: any) => {
  return {
    $marginTop: props?.$marginTop || "50",
  }
})`
  button {
    background: #000000 !important;
    margin-top: ${(props) => `${props?.$marginTop}px`};
  }
`

const DownloadPdfButton = styled(Button)``

interface Props {}

function CvPage(_props: Props): ReactElement {
  const [visibleContent, setVisibleContent] = useState(false)
  const componentRef = useRef() as any
  const onClickPrintCV = useReactToPrint({
    onBeforePrint: () => setVisibleContent(true),
    content: () => componentRef.current,
  })

  return (
    <div>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <MyCvDocument />
        </div>
      </div>
      <MainLayout onClickPrintCV={onClickPrintCV}>
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
        <Row justify="center">
          <Col>
            <Title level={5}>Portfolio</Title>
          </Col>
        </Row>
        <WhiteBox style={{ marginBottom: "32px" }}>
          <Row justify="space-between" style={{ marginBottom: "32px" }}>
            <Col>
              <div>
                <a
                  href="https://revhere.vercel.app/"
                  target="_blank"
                  style={{ color: "#97266d" }}
                >
                  Revhere &gt;
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
                <Avatar
                  src="images/icons/graphql.svg"
                  size={20}
                  alt="graphql"
                />
                <Avatar
                  src="images/icons/ant-design.svg"
                  size={20}
                  alt="antd"
                />
              </div>
            </Col>
            <Col>
              <div>
                <a
                  href="https://goaboatnoodle.netlify.app/"
                  target="_blank"
                  style={{ color: "#97266d" }}
                >
                  Streetfood &gt;
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
                  Covid daily workout &gt;
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
                <Avatar
                  src="images/icons/ant-design.svg"
                  size={20}
                  alt="antd"
                />
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <CarouselStyled autoplay $marginTop="30">
                <div>
                  <Image src="/images/port1.png" />
                </div>
                <div>
                  <Image src="/images/port2.png" />
                </div>
                <div>
                  <Image src="/images/port3.png" />
                </div>
                <div>
                  <Image src="/images/port4.png" />
                </div>
                <div>
                  <Image src="/images/port5.png" />
                </div>
                <div>
                  <Image src="/images/port6.png" />
                </div>
                <div>
                  <Image src="/images/port7.png" />
                </div>
              </CarouselStyled>
            </Col>
          </Row>
        </WhiteBox>

        <Row justify="center" style={{ marginBottom: "32px" }}>
          <Col>
            <Text>
              My skills, I usaually use the Next JS with graphql for frontend.
              And using the Nest js for the backend.
            </Text>
          </Col>
        </Row>
        <WrapperCarousel>
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
                  <img
                    src="images/icons/typescript.png"
                    width={40}
                    height={40}
                  />
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
        </WrapperCarousel>

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
              <Text>
                {" "}
                Bachelor of Business Administration{" "}
                <Tag color="success">Predegree</Tag>
              </Text>
            </Col>
          </Row>
        </WhiteBox>

        <Row justify="center">
          <Col>
            <Title level={5}>My address</Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.015098479206!2d100.49836391458456!3d13.717535301782947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299da4aace129%3A0x955eda95236ebd56!2zUCZXIE1hbnNpb24gKOC4nuC4tSDguYHguK3guJnguJTguYwg4LiU4Lix4Lia4Lia4Lil4Li04LinIOC5geC4oeC4meC4iuC4seC5iOC4mSk!5e0!3m2!1sen!2sth!4v1624431959253!5m2!1sen!2sth"
              width="100%"
              height="450"
              loading="lazy"
            />
          </Col>
        </Row>
      </MainLayout>
    </div>
  )
}

export default CvPage
