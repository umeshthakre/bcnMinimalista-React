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
} from "reactstrap";
import "../styles/6-ReduceComponent.css";

function RenderProductList({ productsList }) {
  return (
    <Card className="card">
      <a href={productsList.site} target="_blank" rel="noreferrer">
        <CardImg
          alt="alt"
          src={productsList.src}
          left
          width="10%"
          className="card-img"
        />

        <CardBody className="card-body">
          <CardTitle tag="h5" className="card-title">
            {productsList.title}
          </CardTitle>
          <CardText className="card-text">{productsList.price}</CardText>
        </CardBody>
      </a>
    </Card>
  );
}

function RenderWasteList({ wasteList }) {
  return (
    <Card>
      <a href={wasteList.site} target="_blank" rel="noreferrer">
        <CardBody className="card-body text-only">
          <CardTitle tag="h5" className="card-title waste-title">
            {wasteList.title}
          </CardTitle>
          <CardText className="card-text">{wasteList.subtitle}</CardText>
        </CardBody>
      </a>
    </Card>
  );
}

function RenderTipsList({ tipsList }) {
  return (
    <Card>
      <CardBody className="card-body text-only">
        <CardTitle tag="h5" className="card-title waste-title">
          {tipsList.title}
        </CardTitle>
      </CardBody>
    </Card>
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
