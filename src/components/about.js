import React from "react"
import { Link } from "gatsby"
import { Col, Row, Typography, Button } from "antd"

export default () => (
  <div
    style={{
      backgroundColor: "#ED684A",
      paddingTop: "30px",
      paddingBottom: "30px",
    }}
  >
    <Row align="middle">
      <Col span={24} align="middle">
        <Typography.Title
          style={{
            margin: "0 auto",
            fontSize: "200%",
            padding: "10px",
            color: "#fff",
          }}
        >
          CoderDojo Padova è un club gratuito, gestito da volontati, aperto a
          ragazzi e ragazze dai 5 ai 17 anni
        </Typography.Title>
        <div style={{ width: "90%" }}>
          <Typography.Paragraph
            style={{
              margin: "0 auto",
              fontSize: "120%",
              color: "#fff",
              paddingTop: "20px",
            }}
          >
            Il nostro obiettivo è avvicinare i ragazzi alla programmazione in un
            ambiente diventente e socializzante, che permetta ai partecipanti di
            incontrare altre persone con la stessa passione, condividendo
            progetti e divertendosi.
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              margin: "0 auto",
              fontSize: "120%",
              color: "#fff",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            CoderDojo è un movimento internazionale che pone anche un forte
            accento sul software free e open source e ha una solida rete globale
            di membri e volontari. CoderDojo ha solo una regola: “Soprattutto
            sii in gamba!” (“Above All: Be Cool”), il bullismo, mentire, far
            perdere tempo e cose così, non è da persone in gamba.
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
    <Row gutter={6}>
      <Col span={12} align="right">
        <Link to="/calendario/">
          <Button type="primary">Prossimi Incontri</Button>
        </Link>
      </Col>
      <Col span={12} align="left">
        <a href="http://eepurl.com/QaW9P">
          <Button
            style={{
              backgroundColor: "#642580",
              border: "none",
              color: "#fff",
            }}
          >
            Rimani Aggiornato
          </Button>
        </a>
      </Col>
    </Row>
  </div>
)
