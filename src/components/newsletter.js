import React from "react"
import { Card, Form, Icon, Input, Button, Typography } from "antd"

const { Title } = Typography

export default props => (
  <div className="newsletter">
    <Card align="middle" bodyStyle={{ width: 300 }}>
      <Title level={3} style={{ textTransform: "uppercase" }}>
        Rimani Aggiornato
      </Title>
      <Form>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Nome"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="E-Mail"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Iscriviti
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
)
