import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col, Layout, Icon } from "antd"

const { Footer } = Layout

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              facebook
              twitter
              github
            }
          }
        }
      }
    `
  )

  return (
    <Footer className="footer" style={{ color: "#fff" }}>
      <Row type="flex" align="middle">
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          align="middle"
          style={{ padding: "15px" }}
        >
          © {data.site.siteMetadata.title} {` `} {new Date().getFullYear()},
          Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            Gatsby
          </a>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          align="middle"
          style={{ padding: "15px" }}
        >
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.coderdojo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/coderdojo.png"
                alt="CoderDojo"
                width="150px"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
            </a>
          </div>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          align="middle"
          style={{ padding: "15px" }}
        >
          <a
            href={data.site.siteMetadata.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              type="facebook"
              style={{ fontSize: "40px", color: "#fff" }}
              theme="filled"
            />
          </a>
          {` `}
          <a
            href={data.site.siteMetadata.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              type="twitter-square"
              style={{ fontSize: "40px", color: "#fff" }}
              theme="filled"
            />
          </a>
          {` `}
          <a
            href={data.site.siteMetadata.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              type="github"
              style={{ fontSize: "40px", color: "#fff" }}
              theme="filled"
            />
          </a>
        </Col>
      </Row>
    </Footer>
  )
}
