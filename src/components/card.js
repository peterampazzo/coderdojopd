import React from "react"
import { Card } from "antd"

export default props => (
  <Card
    hoverable
    style={{
      width: "90%",
      borderRadius: "15px",
    }}
    cover={<img alt={props.imgAlt} src={props.imgSrc} />}
  >
    <Card.Meta title={props.cardTitle} description={props.cardDesc} />
  </Card>
)
