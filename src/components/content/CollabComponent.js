import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/CollabComponent.css";

const Collab = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col> <p className="page-title">share your ideas</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Collab;