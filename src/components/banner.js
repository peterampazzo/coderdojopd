import React from "react"
import { Link } from "gatsby"
import { Typography, Col, Row } from "antd"

const linkStyle = {
  color: "#fff",
  textDecoration: "underline",
  fontWeight: "bold",
}

export default () => (
  <div
    id="newsletter"
    style={{
      backgroundColor: "#ED684A",
      padding: "50px",
    }}
  >
    <Row>
      <Col span={24} align="middle">
        <div style={{ width: "90%" }}>
          <Typography.Paragraph
            style={{
              fontSize: "120%",
              color: "#fff",
            }}
          >
            Hai qualche domanda? Puoi contattarci tramite{" "}
            <Link to="#" style={linkStyle}>
              questo form
            </Link>
            . Tutti i dettagli sugli incontri vengono inviati qualche settimana
            prima, per rimanere aggiornato iscriviti alla{" "}
            <a href="http://eepurl.com/QaW9P" style={linkStyle}>
              nostra newsletter
            </a>
            .
          </Typography.Paragraph>

          <Typography.Paragraph
            style={{
              fontSize: "120%",
              color: "#fff",
            }}
          >
            CoderDojo Padova è un club gratuito e gestito da volontati. Se vuoi
            contribuire al nostro club puoi{" "}
            <Link to="#" style={linkStyle}>
              diventare un nuovo mentor
            </Link>{" "}
            oppure siamo sempre alla ricerca di{" "}
            <Link to="#" style={linkStyle}>
              nuovi spazi
            </Link>{" "}
            dove svolgere la nostre attività.
          </Typography.Paragraph>
        </div>
      </Col>
    </Row>
  </div>
)
