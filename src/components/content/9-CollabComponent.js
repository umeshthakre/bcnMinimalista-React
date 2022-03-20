import React from "react";
import {
  Container,
  Row,
  Col,
  Label,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/9-CollabComponent.css";

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
  if (props.collab) {
    fullCollab = props.collab.map((collab) => {
      return (
        <div key={collab.id} className="col-md-5 m-1">
          <RenderCollabList collabList={collab} />
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
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row>
            <Col className="form-subcaption">
              <h4>We'd love to hear from you!</h4>
            </Col>
          </Row>
          <Row className="input-container">
            <Col className="col-xs-12 col-md-6">
              <Label htmlFor="name">Name</Label>
              <div className="wide">
                <Control.text model=".name" id="name" name="name" />
              </div>
            </Col>
            <Col className="col-xs-12 col-md-6">
              <Label htmlFor="email">Phone</Label>
              <div className="wide">
                <Control.text model=".phone" id="phone" name="phone" />
              </div>
            </Col>
            <Col className="col-xs-12 col-md-12">
              <Label htmlFor="name">Email</Label>
              <div className="wide">
                <Control.text model=".email" id="email" name="email" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-xs-12 col">
              <Label htmlFor="message">Enter your message here</Label>
              <div className="wide">
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="6"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary" className="btn-success">
                Send Feedback
              </Button>
            </Col>
          </Row>

          <Row>{fullCollab} </Row>
        </LocalForm>
      </Container>
    </React.Fragment>
  );
};

export default Collab;
