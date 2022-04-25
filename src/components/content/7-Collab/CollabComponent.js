import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../ui/Footer";
import CollabList from "./CollabList";
// import CollabForm from "./CollabForm";
import { Formik, useFormik } from "formik";
import Modal from "react-modal/lib/components/Modal";

const Collab = (props) => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contact, setContact] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNum: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      setContact({
        name: values.name,
        phoneNum: values.phoneNum,
        email: values.email,
        message: values.message,
      });
      setModalIsOpen(true);
      console.log(values);
      resetForm();
    },
  });
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
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phoneNum"
              value={formik.values.phoneNum}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter your message here</label>
            <input
              type="textarea"
              name="message"
              rows="6"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit">Send FeedBack</button>
        </form>
        <Modal isOpen={modalIsOpen}>
          <div>name={contact.name}</div>
          <div>number={contact.phoneNum}</div>
          <div>email={contact.email}</div>
          <div>message={contact.message}</div>
          <button
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            close
          </button>
        </Modal>
        <CollabList collabList={props.collab} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Collab;
