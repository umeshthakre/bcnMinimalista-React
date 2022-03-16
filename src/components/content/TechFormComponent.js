import React from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

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

export default TechForm;

/* <Form id="myForm__tech" fluid>
<FormGroup fluid>
  <Input
    id="kilometers"
    name="kilometers"
    type="number"
    placeholder="Kilometers driven per week"
  />
  <Input
    id="fastfashion"
    name="fastfashion"
    type="number"
    placeholder="Fast fashion items purchased per year"
  />
  <Input
    id="fly"
    name="fly"
    type="number"
    placeholder="Flight hours over a year"
  />
  <Input
    id="x"
    name="kilometers"
    type="number"
    placeholder="Kilometers driven per week"
  />
  <div className="button-group">
    <Button>Check Footprint</Button>
    <Button>Clear</Button>
  </div>
</FormGroup>
</Form> */
