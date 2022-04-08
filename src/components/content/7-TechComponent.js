import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/7-TechComponent.css";
import TechModal from './7-TechModal';
import useModal from './7-useModal';
import Footer from "./10-FooterComponent";

const RenderTechList = ({ techList }) => {
  return techList.map((tools) => {
    return (
      <div key={tools.id} className="col-md-5 m-1">
        <div className="flex flex-column flex-basis-50 bg-1">
          <a href={tools.src} target="_blank" rel="noreferrer">
            <p class="flex-text">{tools.name}</p>
          </a>
        </div>
      </div>
    );
  });
};

const TechForm = () => {
  // handleSubmit(values) {
  //   console.log(values)
  //   const kiloValue = values.kilometers * 1.2;
  //   const fastValue = values.fast * 100.96;
  //   const flightValue = values.flight * 24;
  //   const meatValue = values.meat * 125;
  //   const total = kiloValue + fastValue + flightValue + meatValue;
  //   console.log(total)
  //   alert(total)
  // }

const {toggleModal, isModalVisible} = useModal

  return (
    <React.Fragment>
      <TechModal isModalVisible={isModalVisible} toggleModal={toggleModal}/>
      <Form
        id="myForm__tech" onSubmit={toggleModal}
      >
        <Row className="form-group">
          <Label htmlFor="firstName" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".kilometers"
              id="kilometers"
              name="firstName"
              placeholder="Kilometers driven per week"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="fastFashion" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".fast"
              id="fastFashion"
              name="fastFashion"
              placeholder="Fast fashion items purchased per year"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="flightHours" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".flight"
              id="flightHours"
              name="flightHours"
              placeholder="Flight hours over a year"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="meat" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".meat"
              id="meat"
              name="meat"
              placeholder="Servings of meat consumed per week"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="button-group">
          <Button>Check Footprint</Button>
          <Button>Clear</Button>
        </Row>
      </Form>
    </React.Fragment>
  );
};

const Tech = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">tech and tools</p>
          </Col>
        </Row>
        <Row>
          <Col>
            Megacorporations must be held accountable for their contribution to
            global warming through policy and taxation, don’t lose sight of
            that! However, on an individual basis, it’s helpful to check in on
            your part too. Check in below with your water footprint, measured in
            gallons of water.
          </Col>
        </Row>
        <TechForm />
        <Row>
          <div className="flex flex-row flex-wrap h-100">
            <RenderTechList techList={props.tools} />
          </div>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Tech;
