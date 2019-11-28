import React from "react"
import { Layout, Menu, Typography } from "antd"

export default props => (
  <div className="header">
    {/* menu */}
    <Layout.Header className="header">
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
    </Layout.Header>
    {/* logo */}
    <Layout.Content
      style={{ marginTop: "20px", padding: "20px", textAlign: "center" }}
    >
      {}
      <img
        src={"/img/coderdojopadova.png"}
        alt="CoderDojo Padova"
        style={{ width: "40%" }}
      />
      <Typography.Title
        level={3}
        style={{
          margin: "0 auto",
          width: "60%",
          fontSize: "150%",
        }}
      >
        {props.text}
      </Typography.Title>
    </Layout.Content>
  </div>
)
