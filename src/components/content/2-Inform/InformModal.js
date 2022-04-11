import { Control, LocalForm } from "react-redux-form";
import { Modal, ModalHeader, ModalBody, Label, Button } from "reactstrap";
import styles from './InformModal.module.css';

const InformModal = (props) => {
  return (
    <Modal>
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
  );
};

export default InformModal;
