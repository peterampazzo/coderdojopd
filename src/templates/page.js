import React from "react"
import { graphql } from "gatsby"
import { Typography, Col, Row } from "antd"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout pageTitle={post.frontmatter.title} pageDesc={post.excerpt}>
      <div
        style={{
          backgroundColor: "#41BAC1",
          paddingTop: "20px",
          paddingBottom: "20px",
          color: "#fff",
        }}
      >
        <Row>
          <Col xs={20} sm={20} md={16} lg={16} xl={14} offset={2}>
            <Typography.Title>{post.frontmatter.title}</Typography.Title>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              style={{ fontSize: "110%", textAlign: "justify" }}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
