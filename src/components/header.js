import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Layout, Menu, Typography, Col, Row } from "antd"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="header">
      {/* menu */}
      <Layout.Header>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "63px" }}
        >
          <Menu.Item key="1">
            <Link to="/partecipa/">Partecipa</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/calendario/">Incontri</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contatti/">Contatti</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      {/* logo */}
      <Row
        align="middle"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Col span={24} align="middle">
          <Link to="/">
            <img
              src={"/img/logo.png"}
              alt={data.site.siteMetadata.title}
              style={{ width: "150px" }}
            />
          </Link>
          <Typography.Title
            level={3}
            style={{
              margin: "0 auto",
              width: "60%",
              fontSize: "200%",
              textTransform: "uppercase",
            }}
          >
            {data.site.siteMetadata.title}
          </Typography.Title>
        </Col>
      </Row>
    </div>
  )
}
