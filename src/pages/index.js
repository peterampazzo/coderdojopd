import React from "react"
import { Link } from "gatsby"
import { Layout, Row, Col } from "antd"

import Header from "../components/header"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Card from "../components/card"

import "../style.less"

export default ({ data }) => (
  <div>
    <Layout>
      <Header
        text="Laboratorio di programmazione gratuito per bambini e ragazzi dai 5 anni
        in su"
      />
      <div style={{ backgroundColor: "#F2F2F2", padding: "50px" }}>
        <Row>
          <Col span={8} align="middle">
            <Link to="/cose/">
              <Card
                imgAlt=""
                imgSrc="/img/Femo_166.jpg"
                cardTitle="Cos'è"
                cardDesc="CoderDojo è un movimento open source, guidato da volontari, che si occupa di creare e organizzare club di programmazione gratuiti e senza scopo di lucro per giovani."
              />
            </Link>
          </Col>
          <Col span={8} align="middle">
            <Card
              imgAlt=""
              imgSrc="/img/Femo_197.jpg"
              cardTitle="Partecipa"
              cardDesc="Il nostro dojo riesce ad accogliere circa 30 bambini ad ogni appuntamento, il numero dipende dalla quantità di volontari e dalla capacità del luogo che ci ospita."
            />
          </Col>
          <Col span={8} align="middle">
            <Card
              imgAlt=""
              imgSrc="/img/arduino.jpg"
              cardTitle="Stile"
              cardDesc="A Padova, come molti altri dojo italiani, siamo molto legati al Creative Learning del MIT e alle sue 4 P: Project, Peers, Play e Passion."
            />
          </Col>
        </Row>
      </div>
      <Newsletter />
      <Footer siteTitle={data.site.siteMetadata.title} />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
