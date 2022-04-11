import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import TechModal from './TechModal';
import Footer from "../../ui/Footer";
import TechForm from './TechForm';
import TechList from './TechList';


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
        <TechModal/>
        <TechForm />
        <Row>
          <div className="flex flex-row flex-wrap h-100">
            <TechList techTools={props.tools} />
          </div>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Tech;
