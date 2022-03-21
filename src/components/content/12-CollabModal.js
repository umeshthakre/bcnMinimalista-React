import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

class CollabModal extends Component {
  constructor(props) {
    super(props);

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
    alert("Comment submitted: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Modal>
          <ModalHeader>collab and listen</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="name">Name</Label>
                <Control.text
                  model=".name"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.text
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                />
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CollabModal;
