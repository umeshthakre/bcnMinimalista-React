import React from "react";
import { Container, Row, Col, CardBody, CardText, Button, Label } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/7-TechComponent.css";

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

const TechForm = () => {
  return (
    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
      <Row className="form-group">
        <Label htmlFor="firstName" md={2}></Label>
        <Col md={10}>
          <Control.text
            model=".kiloters"
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
        <Label htmlFor="meat" md={2}>
        </Label>
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
    </LocalForm>
  );
};

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
        <TechForm />
        <Row>
          <Col>{techTools} </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tech;
