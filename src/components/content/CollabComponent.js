import React, { useState } from "react";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import Modal from "react-modal/lib/components/Modal";
import "../../styles/components/CollabComponent.css";

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
      <div className="collab-container">
        <div className="collab__title">
          <div className="collab__title-text">
            <p>share your ideas</p>
          </div>
          <div className="collab__title-caption">
            <p>We'd love to hear from you!</p>
          </div>
        </div>
        <div className="collab__form-container">
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
        </div>
        <div className="collab__modal">
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
        </div>
        <div className="collab__list">
          {props.collab.map((collab) => {
            return (
              <div key={collab.id} className="collab__list-card">
                <a href={collab.src} target="_blank" rel="noreferrer">
                  <p className="collab__list-card-text">{collab.name}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Collab;
