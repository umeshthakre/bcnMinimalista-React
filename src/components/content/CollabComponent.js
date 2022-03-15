import React from "react";
import { Container, Row, Col, Form, Label } from "reactstrap";
// import { Control } from "react-redux-form";
import "../styles/CollabComponent.css";

const Collab = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">share your ideas</p>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col className="form-subcaption">
              <h4>We'd love to hear from you!</h4>
            </Col>
          </Row>
          <Row className="input-container">
            <Col className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <Label>Name</Label>
              </div>
            </Col>
            <Col className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <Label>Email</Label>
              </div>
            </Col>
            <Col className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <Label>Phone</Label>
              </div>
            </Col>
            <Col className="col-xs-12">
              <div className="styled-input wide">
                <textarea></textarea>
                <Label>Message</Label>
              </div>
            </Col>
            <Col>
              <div className="col col-xs-12">
                <div
                  className="btn-lrg btn btn-success"
                  type="button"
                  id="collabButton"
                >
                  Send Message
                </div>
              </div>
            </Col>
          </Row>
          <Row>A list of collaborators goes here </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Collab;
