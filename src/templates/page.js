import React from "react"
import { graphql } from "gatsby"
import { Layout, Typography, Col, Row } from "antd"

import Header from "../components/header"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <Header />
        <div
          style={{
            backgroundColor: "#41BAC1",
            paddingTop: "20px",
            paddingBottom: "20px",
            color: "#fff",
          }}
        >
          <Row>
            <Col span={16} offset={4}>
              <Typography.Title>{post.frontmatter.title}</Typography.Title>
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                style={{ fontSize: "110%", textAlign: "justify" }}
              />
            </Col>
          </Row>
        </div>
        <Newsletter />
        <Footer />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
