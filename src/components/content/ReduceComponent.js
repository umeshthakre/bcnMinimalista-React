import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import "../styles/ReduceComponent.css";

function RenderProductList({ productsList }) {
  return (
    <Row>
      <a href={productsList.site} target="_blank" rel="noreferrer">
        <Col xs="3">
          <CardImg alt="alt" src={productsList.src} left width="10%" />
        </Col>
        <Col xs="9">
          <CardBody>
            <CardTitle tag="h5">{productsList.title}</CardTitle>
            <CardText>{productsList.price}</CardText>
          </CardBody>
        </Col>
      </a>
    </Row>
  );
}

function RenderWasteList({ wasteList }) {
  return (
    <Row>
      <a href={wasteList.site} target="_blank" rel="noreferrer">
        <Col xs="9">
          <CardBody>
            <CardTitle tag="h5">{wasteList.title}</CardTitle>
            <CardText>{wasteList.subtitle}</CardText>
          </CardBody>
        </Col>
      </a>
    </Row>
  );
}

function RenderTipsList({ tipsList }) {
  return (
    <Row>
        <Col xs="9">
          <CardBody>
            <CardTitle tag="h5">{tipsList.title}</CardTitle>
          </CardBody>
        </Col>
    </Row>
  );
}

const Reduce = (props) => {
  let prodList;
  if (props.products) {
    prodList = props.products.map((products) => {
      return (
        <div key={products.id} className="col-md-5 m-1">
          <RenderProductList productsList={products} />
        </div>
      );
    });
  }

  let wasteList;
  if (props.waste) {
    wasteList = props.waste.map((waste) => {
      return (
        <div key={waste.id} className="col-md-5 m-1">
          <RenderWasteList wasteList={waste} />
        </div>
      );
    });
  }

  let tipsList;
  if (props.tips) {
    tipsList = props.tips.map((tips) => {
      return (
        <div key={tips.id} className="col-md-5 m-1">
          <RenderTipsList tipsList={tips} />
        </div>
      );
    });
  }
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <p className="page-title">minimize carbon output and waste</p>
          </Col>
          {/* <Col sm="3" xs="5">
            <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <h3>Goods the encourage longevity</h3>
          </Col>
          <Button
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
          >
            Make a Suggestion
          </Button>
        </Row>
        <Row>{prodList}</Row>
        <Row>
          <Col>
            <h3>Waste and Recycling Services</h3>
          </Col>
          <Button
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
          >
            Make a Suggestion
          </Button>
        </Row>
        <Row>{wasteList}</Row>
        <Row>
          <Col>
            <h3>Tips and Tricks</h3>
          </Col>
          <Button
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
          >
            Make a Suggestion
          </Button>
        </Row>
        <Row>{tipsList}</Row>
      </Container>
    </React.Fragment>
  );
};

export default Reduce;
