import React from "react"
import { Layout, Menu } from "antd"

const { Header } = Layout

export default props => (
  <Header className="header">
    {/* <div className="logo" /> */}
    <Menu
      theme="dark"
      mode="horizontal"
      // defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">Partecipa</Menu.Item>
      <Menu.Item key="2">Incontri</Menu.Item>
      <Menu.Item key="3">Contatti</Menu.Item>
    </Menu>
  </Header>
)