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
    <div className="flex flex-column flex-basis-30 bg-4">
      <a href={collabList.src} target="_blank" rel="noreferrer">
        <p className="flex-text">{collabList.name}</p>
      </a>
    </div>
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
        <Row>
          <Col className="form-subcaption">
            <h4>We'd love to hear from you!</h4>
          </Col>
        </Row>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Col className="">
              <Label htmlFor="name">Name</Label>
              <div>
                <Control.text model=".name" id="name" name="name" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <Label htmlFor="email">Phone</Label>
              <div>
                <Control.text model=".phone" id="phone" name="phone" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <Label htmlFor="name">Email</Label>
              <div>
                <Control.text model=".email" id="email" name="email" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <Label htmlFor="message">Enter your message here</Label>
              <div>
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
            <Col>
              <Button type="submit" color="primary" className="btn-success">
                Send Feedback
              </Button>
            </Col>
          </Row>
          <Row>
            <div className="flex flex-row flex-wrap h-100 flex-collab">
              {fullCollab}
            </div>
          </Row>
        </LocalForm>
      </Container>
    </React.Fragment>
  );
};

export default Collab;
