import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/TechComponent.css";

const Tech = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col> <p className="page-title">tech and tools</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tech;