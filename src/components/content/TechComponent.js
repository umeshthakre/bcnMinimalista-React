import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardText,
} from "reactstrap";
import TechForm from "./TechFormComponent";
import "../styles/TechComponent.css";

function RenderTechList({ techList }) {
  return (
    <Row>
      <a href={techList.src} target="_blank" rel="noreferrer">
        <Col xs="9">
          <CardBody>
            <CardText>{techList.name}</CardText>
          </CardBody>
        </Col>
      </a>
    </Row>
  );
}

const Tech = (props) => {
  let techTools;
  if (props.tools) {
    techTools = props.tools.map((tools) => {
      return (
        <div key={tools.id} className="col-md-5 m-1">
          <RenderTechList techList={tools} />
        </div>
      );
    });
  }
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
        <Row>
          <TechForm />
        </Row>
        <Row>
          <Col>{techTools} </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tech;
