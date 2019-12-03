import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Typography, Col, Row } from "antd"

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
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={"/img/logo.png"}
              alt={data.site.siteMetadata.title}
              style={{ width: "150px" }}
            />
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
          </Link>
        </Col>
      </Row>
    </div>
  )
}
