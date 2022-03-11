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
      </Container>
    </React.Fragment>
  );
};

export default Tech;
