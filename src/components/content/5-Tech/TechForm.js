import React from 'react';
import { Row, Col, Button, Form, Label } from "reactstrap";
import { Control } from "react-redux-form";
import styles from './TechForm.module.css'

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

  return (
    <React.Fragment>
      <Form className={styles.techForm}>
        <Row className={styles['form-group']}>
          <Label htmlFor="firstName" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".kilometers"
              id="kilometers"
              name="firstName"
              placeholder="Kilometers driven per week"
              className='form-control'
            />
          </Col>
        </Row>
        <Row  className={styles['form-group']}>
          <Label htmlFor="fastFashion" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".fast"
              id="fastFashion"
              name="fastFashion"
              placeholder="Fast fashion items purchased per year"
              className='form-control'
            />
          </Col>
        </Row>
        <Row  className={styles['form-group']}>
          <Label htmlFor="flightHours" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".flight"
              id="flightHours"
              name="flightHours"
              placeholder="Flight hours over a year"
              className='form-control'
            />
          </Col>
        </Row>
        <Row  className={styles['form-group']}>
          <Label htmlFor="meat" md={2}></Label>
          <Col md={10}>
            <Control.text
              model=".meat"
              id="meat"
              name="meat"
              placeholder="Servings of meat consumed per week"
              className='form-control'
            />
          </Col>
        </Row>
        <Row className={styles['button-group']}>
          <Button>Check Footprint</Button>
          <Button>Clear</Button>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default TechForm;
