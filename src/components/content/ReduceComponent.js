import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/ReduceComponent.css";

const Reduce = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <p className="page-title">minimize carbon output and waste</p>
          </Col>
          {/* <Col sm="3" xs="5">
            <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <h3>Goods the encourage longevity</h3>
          </Col>
          <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
        </Row>
        <Row>product list here </Row>
        <Row>
          <Col>
            <h3>Waste and Recycling Services</h3>
          </Col>
          <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
        </Row>
        <Row>recycling services here</Row>
        <Row>
          <Col>
            <h3>Tips and Tricks</h3>
          </Col>
          <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
        </Row>
        <Row>tips here</Row>
      </Container>
    </React.Fragment>
  );
};

export default Reduce;
