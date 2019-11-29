import React from "react"
import { Layout, Menu, Typography, Col, Row } from "antd"

export default props => (
  <div className="header">
    {/* menu */}
    <Layout.Header>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "63px" }}
      >
        <Menu.Item key="1">Partecipa</Menu.Item>
        <Menu.Item key="2">Incontri</Menu.Item>
        <Menu.Item key="3">Contatti</Menu.Item>
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
        <img
          src={"/img/logo.png"}
          alt="CoderDojo Padova"
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
          {props.siteTitle}
        </Typography.Title>
      </Col>
    </Row>
  </div>
)
