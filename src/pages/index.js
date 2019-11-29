import React from "react"
import { Link, graphql } from "gatsby"
import { Layout, Row, Col } from "antd"

import Header from "../components/header"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Card from "../components/card"

export default ({ data }) => (
  <div>
    <Layout>
      <Header text={data.site.siteMetadata.desc} />
      <div style={{ backgroundColor: "#F2F2F2", padding: "50px" }}>
        <Row gutter={20}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            align="middle"
            style={{ paddingTop: "15px" }}
          >
            <Link to="/cose/">
              <Card
                imgAlt=""
                imgSrc="/img/Femo_166.jpg"
                cardTitle="Cos'è"
                cardDesc="CoderDojo è un movimento open source, guidato da volontari, che si occupa di creare e organizzare club di programmazione gratuiti e senza scopo di lucro per giovani."
              />
            </Link>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            align="middle"
            style={{ paddingTop: "15px" }}
          >
            <Card
              imgAlt=""
              imgSrc="/img/Femo_197.jpg"
              cardTitle="Partecipa"
              cardDesc="Il nostro dojo riesce ad accogliere circa 30 bambini ad ogni appuntamento, il numero dipende dalla quantità di volontari e dalla capacità del luogo che ci ospita."
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            align="middle"
            style={{ paddingTop: "15px" }}
          >
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
      <Footer
        siteTitle={data.site.siteMetadata.title}
        socialLinks={data.site.siteMetadata.social}
      />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        desc
        social {
          facebook
          twitter
          github
        }
      }
    }
  }
`
