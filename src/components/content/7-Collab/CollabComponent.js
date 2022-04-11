import React from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../ui/Footer";
import CollabList from "./CollabList";
import CollabForm from "./CollabForm";

const Collab = (props) => {
  //   this.handleSubmit = this.handleSubmit.bind(this);

  // handleSubmit(values) {
  //   console.log("Current state is: " + JSON.stringify(values));
  //   alert("Current state is: " + JSON.stringify(values));
  //   this.props.resetCollabForm();

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
        <CollabForm />
        <CollabList collabList={props.collab} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Collab;
