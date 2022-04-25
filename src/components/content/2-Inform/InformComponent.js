import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../../ui/Footer";
import RenderInformList from "./InformList";
import Modal from "react-modal/lib/components/Modal";
import { useFormik } from "formik";

const Inform = (props) => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalOneIsOpen, setModalOneIsOpen] = useState(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      article: "",
      link: "",
    },
    onSubmit: (values, { resetForm }) => {

      setModalTwoIsOpen(true);
      console.log(values);
      resetForm();
    },
  });
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <p className="page-title">news in local waste reduction</p>
          </Col>

          <Button
            onClick={() => setModalOneIsOpen(true)}
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
            // onClick={this.toggleModal}
          >
            Suggest article
          </Button>
        </Row>
        <RenderInformList informList={props.informList} />
        <Modal isOpen={modalOneIsOpen}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="article">Article</label>
            <input
              type="text"
              name="article"
              value={formik.values.article}
              onChange={formik.handleChange}
            />
            <label htmlFor="article">Link</label>
            <input
              type="text"
              name="link"
              value={formik.values.link}
              onChange={formik.handleChange}
            />
            <button
              onClick={() => {
                setModalOneIsOpen(false);
              }}
            >
              close
            </button>
            <button
              onClick={() => {
                setModalOneIsOpen(false);
                setModalTwoIsOpen(true);
              }}
            >
              submit
            </button>
          </form>
        </Modal>
        <Modal isOpen={modalTwoIsOpen}>
          <div> Modal Two </div>
          <div>Thank you for submitting {formik.values.article} and {formik.values.link} </div>
          <button
            onClick={() => {
              setModalTwoIsOpen(false);
            }}
          >
            close
          </button>
        </Modal>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Inform;
