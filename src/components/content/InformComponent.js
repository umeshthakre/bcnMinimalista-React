import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/InformComponent.css";

const Inform = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="9">
            <p className="page-title">news in local waste reduction</p>
          </Col>
          <Col sm="3">
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

export default Inform;
