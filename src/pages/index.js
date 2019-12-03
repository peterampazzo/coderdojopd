import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "antd"

import Layout from "../components/layout"
import About from "../components/about"
import Card from "../components/card"

const linkStyle = {
  textDecoration: "none",
}

export default () => (
  <Layout pageTitle="Home Page">
    <About />
    <div style={{ backgroundColor: "#F2F2F2", padding: "30px" }}>
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
          <Link to="/che-cose/" style={linkStyle}>
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
          <Link to="/stile/" style={linkStyle}>
            <Card
              imgAlt=""
              imgSrc="/img/DSCF4762.jpg"
              cardTitle="Stile"
              cardDesc="A Padova, come molti altri dojo italiani, siamo molto legati al Creative Learning del MIT e alle sue 4 P: Project, Peers, Play e Passion."
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
          <Link to="/partecipa/" style={linkStyle}>
            <Card
              imgAlt=""
              imgSrc="/img/Femo_172.jpg"
              cardTitle="Partecipa"
              cardDesc="Il nostro dojo riesce ad accogliere circa 30 bambini ad ogni appuntamento, il numero dipende dalla quantità di volontari e dalla capacità del luogo che ci ospita."
            />
          </Link>
        </Col>
      </Row>
    </div>
  </Layout>
)
