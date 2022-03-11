import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/InformComponent.css";
import Bag from "../../img/bag.jpg";

const Inform = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="9" xs="5">
            <p className="page-title">news in local waste reduction</p>
          </Col>
          <Col sm="3" xs="5">
            <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <CardImg alt="Card image cap" src={Bag} left width="10%" />
          </Col>
          <Col xs="9">
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <CardImg alt="Card image cap" src={Bag} left width="10%" />
          </Col>
          <Col xs="9">
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <CardImg alt="Card image cap" src={Bag} left width="10%" />
          </Col>
          <Col xs="9">
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Inform;

