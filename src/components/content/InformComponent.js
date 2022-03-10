import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button, Fade, 
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Inform = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </div>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Toggle Fade
          </Button>
          <Fade className="mt-3" tag="h5">
            This content will fade in and out as the button is pressed
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Inform;
