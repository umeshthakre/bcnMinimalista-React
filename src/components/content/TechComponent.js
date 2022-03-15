import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../styles/TechComponent.css";

const Tech = () => {
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
          <Form id="myForm__tech" fluid>
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
          </Form>
        </Row>
        <Row>
          <Col>Additional tools go here </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tech;
