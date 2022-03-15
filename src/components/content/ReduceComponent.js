import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/ReduceComponent.css";


const Reduce = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="9" xs="5">
            <p className="page-title">minimize carbon output and waste</p>
          </Col>
          <Col sm="3" xs="5">
            <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Reduce;