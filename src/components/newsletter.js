import React from "react"
import { Form, Icon, Input, Button, Typography, Col, Row } from "antd"

export default () => (
  <div
    id="newsletter"
    style={{
      backgroundColor: "#ED684A",
      padding: "20px",
      paddingTop: "40px",
    }}
  >
    <Row>
      <Col span={24} align="middle">
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
      </Col>
    </Row>
  </div>
)
