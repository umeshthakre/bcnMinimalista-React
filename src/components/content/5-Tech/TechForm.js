import React, { useState } from "react";
import { Row, Col, Button, Form, Label } from "reactstrap";
import { Control } from "react-redux-form";
import styles from "./TechForm.module.css";
import Modal from "react-modal/lib/components/Modal";
import { Formik, useFormik } from "formik";

const TechForm = () => {

    // const kiloValue = values.kilometers * 1.2;
    // const fastValue = values.fast * 100.96;
    // const flightValue = values.flight * 24;
    // const meatValue = values.meat * 125;
    // const total = kiloValue + fastValue + flightValue + meatValue;


  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const formik = useFormik({
    initialValues: {
      kilometers: "",
      fastFashion: "",
      flightHours: "",
      meat: "",
    },
    onSubmit: (values, { resetForm }) => {
      setAnswer((values.kilometers * 1.2) +(values.fastFashion* 100.96)+ (values.flightHours * 24) + (values.meat * 125));
      setModalIsOpen(true);
      console.log(answer);
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <form className={styles.techForm} onSubmit={formik.handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="firstName" md={2}></label>
          <div md={10}>
            <input
              type="number"
              id="kilometers"
              name="kilometers"
              placeholder="Kilometers driven per week"
              value={formik.values.kilometers}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
        </ div>
        <div className={styles["form-group"]}>
          <label htmlFor="fastFashion" md={2}></label>
          <div md={10}>
            <input
              type="number"
              id="fastFashion"
              name="fastFashion"
              placeholder="Fast fashion items purchased per year"
              value={formik.values.fastFashion}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="flightHours" md={2}></label>
          <div md={10}>
            <input
              type="number"
              id="flightHours"
              name="flightHours"
              placeholder="Flight hours over a year"
              value={formik.values.flightHours}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="meat" md={2}></label>
          <div md={10}>
            <input
              type="number"
              id="meat"
              name="meat"
              placeholder="Servings of meat consumed per week"
              value={formik.values.meat}
              onChange={formik.handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className={styles["button-group"]}>
          <button type="submit">Check Footprint</button>
          <button>Clear</button>
        </div>
      </form>
      <Modal isOpen={modalIsOpen}>
        <div>This is the modal</div>
        <div>{answer}</div>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          close
        </button>
      </Modal>
    </React.Fragment>
  );
};

export default TechForm;
