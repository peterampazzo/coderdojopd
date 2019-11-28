import React from "react"
import { Card } from "antd"

export default props => (
  <Card
    hoverable
    style={{
      width: "80%",
      borderRadius: "20px",
    }}
    cover={
      <img alt={props.imgAlt} src={props.imgSrc} style={{ height: "auto" }} />
    }
  >
    <Card.Meta title={props.cardTitle} description={props.cardDesc} />
  </Card>
)
