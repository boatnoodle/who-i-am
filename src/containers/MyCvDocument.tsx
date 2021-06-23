import { useReactToPrint } from "react-to-print"
import React, { ReactElement, useRef } from "react"
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
  Card,
} from "antd"
import { MainLayout } from "layouts/main-layout"
import styled from "styled-components"
const { Title, Text } = Typography
const TextSm = styled(Text)`
  font-size: 10px;
`
// Create Document Component
export const MyCvDocument = () => (
  <div style={{ padding: "30px" }}>
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
    <Divider />
    <Row justify="center">
      <Col>
        <Title level={5}>Portfolio</Title>
      </Col>
    </Row>
    <Row justify="space-between" style={{ marginBottom: "32px" }}>
      <Col span={8}>
        <div style={{ marginBottom: "6px" }}>
          <a
            href="https://revhere.vercel.app/"
            target="_blank"
            style={{ color: "#97266d" }}
          >
            Revhere
          </a>{" "}
          <Avatar src="images/icons/revhere.png" alt="revhere-logo" size={20} />
        </div>
        <div>
          <TextSm>This website has inspired by my friend idea.</TextSm>
        </div>
        <div style={{ marginBottom: "6px" }}>
          <TextSm>To be the review website.</TextSm>
        </div>
      </Col>
      <Col span={8}>
        <div style={{ marginBottom: "6px" }}>
          <a
            href="https://goaboatnoodle.netlify.app/"
            target="_blank"
            style={{ color: "#97266d" }}
          >
            Streetfood
          </a>{" "}
          <Avatar src="images/icons/github.svg" alt="github" size={20} />
        </div>
        <div style={{ marginBottom: "6px" }}>
          <TextSm>
            I created this app to use in my boat noodles restaurant.
          </TextSm>
        </div>
      </Col>
      <Col span={8}>
        <div style={{ marginBottom: "6px" }}>
          <a
            href="https://github.com/boatnoodle/covid-workout-daily"
            target="_blank"
            style={{ color: "#97266d" }}
          >
            Covid daily workout
          </a>{" "}
          <Avatar src="images/icons/github.svg" alt="github" size={20} />
        </div>
        <div style={{ marginBottom: "6px" }}>
          <TextSm>
            This app created for tracking my daily workout routine. <br />
            But It's not completely yet.
          </TextSm>
        </div>
      </Col>
    </Row>
    <Divider />
    <Row justify="center" style={{ marginBottom: "32px" }}>
      <Col>
        <Text>
          My skills, I usaually use the Next JS with graphql for frontend. And
          using the Nest js for the backend.
        </Text>
      </Col>
    </Row>
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
    <Row justify="space-around" align="bottom">
      <Col>
        <img src="images/icons/firebase.png" width={40} height={40} />
        <Text>Firebase</Text>
      </Col>
      <Col>
        <img src="images/icons/github-actions.svg" width={40} height={40} />
        <Text>Github Action</Text>
      </Col>
      <Col>
        <img src="images/icons/docker.png" width={40} height={40} />
        <Text>Docker</Text>
      </Col>
      <Col>
        <img src="images/icons/digitalocean.svg" width={40} height={40} />
        <Text>Digital ocean</Text>
      </Col>
      <Col>
        <img src="images/icons/netlify.svg" width={40} height={40} />
        <Text>Netlify</Text>
      </Col>
    </Row>
    <Divider />
    <Row justify="center">
      <Col>
        <Title level={5}>Work experiences</Title>
      </Col>
    </Row>
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
          </Timeline.Item>
          <Timeline.Item>
            <Row align="middle" gutter={16}>
              <Col>
                <img src="images/icons/eventpop.jpeg" width={40} height={40} />
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
          </Timeline.Item>
          <Timeline.Item style={{ padding: 0 }}>
            <Row align="middle" gutter={16}>
              <Col>
                <img src="images/icons/blueseas.png" width={40} height={40} />
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
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
    <Divider />
    <Row justify="center">
      <Col>
        <Title level={5}>Education</Title>
      </Col>
    </Row>
    <Row align="middle" gutter={16}>
      <Col>
        <Text style={{ color: "#97266d" }}>2014 - 2016</Text>
      </Col>
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
    <Row align="middle" gutter={16}>
      <Col>
        <Text style={{ color: "#97266d" }}>2014 - 2015</Text>
      </Col>
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
    <Divider />
    <Row justify="center">
      <Col>
        <Title level={5}>My address</Title>
      </Col>
    </Row>
    <Row justify="center">
      <Col>
        <Text>
          833 Soi Krung Thonburi 6, Bang Lamphu Lang, Khlong San, Bangkok 10600
        </Text>
      </Col>
    </Row>
  </div>
)
