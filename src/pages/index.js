import React from "react"
import { Layout, Row, Col, Typography } from "antd"
import Header from "../components/header"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"

import "../style.less"

const { Title } = Typography
const { Content } = Layout

export default ({ data }) => (
  <div>
    <Layout>
      <Header />
      <div className="about">
        {/* <Title level={1}>{data.site.siteMetadata.title}</Title> */}
        <img src={"/coderdojopadova.png"} alt="CoderDojo Padova" />
      </div>
      <Content style={{ marginTop: "20px", padding: "20px" }}>
        <Row>
          <Col span={8} align="middle">
            <Title level={4}>Cos'è</Title>
          </Col>
          <Col span={8} align="middle">
            <Title level={4}>Partecipa</Title>
          </Col>
          <Col span={8} align="middle">
            <Title level={4}>Stile</Title>
          </Col>
        </Row>
      </Content>
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
