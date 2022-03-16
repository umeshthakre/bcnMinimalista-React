import React from "react";
import { Container, Row, Col, Form, Label, CardBody, CardText } from "reactstrap";
// import { Control } from "react-redux-form";
import "../styles/CollabComponent.css";

function RenderCollabList({ collabList }) {
  return (
    <Row>
      <a href={collabList.src} target="_blank" rel="noreferrer">
        <Col xs="9">
          <CardBody>
            <CardText>{collabList.name}</CardText>
          </CardBody>
        </Col>
      </a>
    </Row>
  );
}

const Collab = (props) => {
  let fullCollab;
  if(props.collab) {
    fullCollab = props.collab.map((collab) => {
      return (
          <div key={collab.id} className="col-md-5 m-1">
            <RenderCollabList collabList={collab}/>
          </div>
      );
    });
  }
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
          <Row>{fullCollab} </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Collab;
