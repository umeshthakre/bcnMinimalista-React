import React from "react";
import {  FormGroup,  Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

const TechForm = (props) => {
  return (
    <LocalForm id="myForm__tech" fluid>
      <FormGroup fluid>
        <Control.text
          id="kilometers"
          name="kilometers"
          type="number"
          placeholder="Kilometers driven per week"
        />
        <Control.text
          id="fastfashion"
          name="fastfashion"
          type="number"
          placeholder="Fast fashion items purchased per year"
        />
        <Control.text
          id="fly"
          name="fly"
          type="number"
          placeholder="Flight hours over a year"
        />
        <Control.text
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
    </LocalForm>
  );
};

export default TechForm;

{
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
}
