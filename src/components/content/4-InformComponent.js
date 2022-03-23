import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/4-InformComponent.css";
import { Loading } from "./LoadingComponent";

function RenderInformList({ informList, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (errMess) {
    return (
      <div className="container">
        <div className="row">{errMess}</div>
      </div>
    );
  }
  return informList.map((inform) => {
    return (
      <div key={inform.id} className="col-md-5 m-1">
        <Row className="snippet-row">
          <Col>
            <img src={inform.img} className="img-fluid" alt={inform.alt} />
          </Col>
          <Col className="snippet">
            <a href={inform.src} target="_blank" rel="noreferrer">
              <p className="snippet-header text-responsive">{inform.title}</p>
              <p className="snippet-body text-responsive">{inform.caption}</p>
            </a>
          </Col>
        </Row>
      </div>
    );
  });
}

class Inform extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    alert("suggestion submitted: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm="9" xs="5">
              <p className="page-title">news in local waste reduction</p>
            </Col>
            <Col sm="3" xs="5">
              <Button
                className="modal-button"
                color="success"
                outline
                id="suggestButton"
                onClick={this.toggleModal}
              >
                Suggest article
              </Button>
            </Col>
          </Row>
          <RenderInformList
            informList={this.props.informList}
            isLoading={this.props.informLoading}
            errMess={this.props.informErrMess}
          />
        </Container>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>share your thoughts</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="name">name</Label>
                <Control.text
                  model=".name"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="comment">thought</Label>
                <Control.text
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                />
              </div>
              <Button type="submit">submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Inform;
