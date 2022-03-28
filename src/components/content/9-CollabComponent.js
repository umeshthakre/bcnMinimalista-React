import React, { Component } from "react";
import { Container, Row, Col, Label, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/9-CollabComponent.css";

function RenderCollabList({ collabList }) {
  return collabList.map((collab) => {
    return (
      <div key={collab.id} className="col-md-5 m-1">
        <div className="flex flex-column flex-basis-30 bg-4">
          <a href={collab.src} target="_blank" rel="noreferrer">
            <p className="flex-text">{collab.name}</p>
          </a>
        </div>
      </div>
    );
  });
}



class Collab extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   ...createForms({
    //     feedbackCollab: InitialCollab,
    //   }),
    // };
  }



  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.props.resetCollabForm();
  }
  render() {
    // const InitialCollab = {
    //   name: '',
    //   phone: '',
    //   email: '',
    //   message: '',
    // };

    // const colllabReducer = modelReducer('collab', initialCollab);

    // const resetState = counterReducer(nextState,
    //   actions.reset('collab'));
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
          <LocalForm onSubmit={(values) => this.handleSubmit(values)} model="feedbackCollab">
            <div className="form-group">
              <Label htmlFor="name">Name</Label>
              <Control.text
                model=".name"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="email">Phone</Label>
              <Control.text
                model=".phone"
                id="phone"
                name="phone"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="name">Email</Label>
              <Control.text
                model=".email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="message">Enter your message here</Label>
              <Control.textarea
                model=".message"
                id="message"
                name="message"
                rows="6"
                className="form-control"
              />
            </div>
            <Row>
              <Col>
                <Button type="submit" color="primary" className="btn-success">
                  Send Feedback
                </Button>
              </Col>
            </Row>
            <Row>
              <div className="flex flex-row flex-wrap h-100 flex-collab">
                <RenderCollabList collabList={this.props.collab} />
              </div>
            </Row>
          </LocalForm>
        </Container>
      </React.Fragment>
    );
  }
}

export default Collab;
