import React from "react"
import { Link } from "gatsby"
import { Layout, Menu } from "antd"

const linkStyle = {
  textDecoration: "none",
}

export default () => (
  <Layout.Header>
    <Menu
      mode="horizontal"
      // defaultSelectedKeys={["2"]}
      style={{ lineHeight: "63px" }}
    >
      <Menu.Item key="1">
        <Link to="/partecipa/" style={linkStyle}>
          Partecipa
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/calendario/" style={linkStyle}>
          Incontri
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/contatti/" style={linkStyle}>
          Contatti
        </Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
)
