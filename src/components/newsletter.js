import React from "react"
import { Layout, Form, Icon, Input, Button, Typography } from "antd"

export default props => (
  <Layout.Content style={{ backgroundColor: "#ED684A", padding: "20px" }}>
    <div
      style={{
        width: "250px",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <Typography.Title
        level={3}
        style={{
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        Rimani Aggiornato
      </Typography.Title>
      <Form>
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="E-Mail"
            style={{ width: "250px" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Iscriviti
          </Button>
        </Form.Item>
      </Form>
    </div>
  </Layout.Content>
)
