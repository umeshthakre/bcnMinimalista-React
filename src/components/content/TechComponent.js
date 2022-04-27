import React, { useState } from "react";
import Footer from "../ui/Footer";
import Modal from "react-modal/lib/components/Modal";
import { useFormik } from "formik";
import "../../styles/components/TechComponent.css";

const Tech = (props) => {
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
      setAnswer(
        values.kilometers * 1.2 +
          values.fastFashion * 100.96 +
          values.flightHours * 24 +
          values.meat * 125
      );
      setModalIsOpen(true);
      console.log(answer);
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <div className="tech-container">
        <div className="tech__title">
          <p className="tech__title-text">tech and tools</p>
        </div>
        <div className="tech__caption-body">
          <div className="tech__caption-text">
            Megacorporations must be held accountable for their contribution to
            global warming through policy and taxation, don’t lose sight of
            that! However, on an individual basis, it’s helpful to check in on
            your part too. Check in below with your water footprint, measured in
            gallons of water.
          </div>
        </div>
        <div className="tech__form-container">
          <form className="tech__form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
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
            </div>
            <div className="form-group">
              <label htmlFor="fastFashion" md={2}></label>
              <div>
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <button type="submit">Check Footprint</button>
              <button>Clear</button>
            </div>
          </form>
        </div>
        <div className="tech__tools-container">
          {props.tools.map((tools) => {
            return (
              <div key={tools.id} className="tech__tools-card">
                <a href={tools.src} target="_blank" rel="noreferrer">
                  <p className="tech__tools-text">{tools.name}</p>
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

export default Tech;
