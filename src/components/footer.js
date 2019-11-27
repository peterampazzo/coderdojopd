import React from "react"
import { Row, Col, Layout, Icon } from "antd"

const { Footer } = Layout

export default props => (
  <Footer className="footer">
    <Row>
      <Col span={12}>
        © {props.siteTitle} {` `} {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Col>
      <Col span={12} align="right">
        <Icon
          type="facebook"
          style={{ fontSize: "30px", color: "#fff" }}
          theme="filled"
        />
        {` `}
        <Icon
          type="twitter-square"
          style={{ fontSize: "30px", color: "#fff" }}
          theme="filled"
        />
        {` `}
        <Icon
          type="github"
          style={{ fontSize: "30px", color: "#fff" }}
          theme="filled"
        />
      </Col>
    </Row>
  </Footer>
)
