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
import Footer from "./10-FooterComponent";

const RenderProductList = ({ productsList }) => {
  return productsList.map((product) => {
    return (
      <div key={product.id}>
        <Card>
          <a href={product.site} target="_blank" rel="noreferrer">
            <CardImg alt="alt" src={product.src} left width="10%" />

            <CardBody>
              <CardTitle tag="h5">{product.title}</CardTitle>
              <CardText>{product.price}</CardText>
            </CardBody>
          </a>
        </Card>
      </div>
    );
  });
};
const RenderWasteList = ({ wasteList }) => {
  return wasteList.map((waste) => {
    return (
      <div key={waste.id}>
        <Card>
          <a href={waste.site} target="_blank" rel="noreferrer">
            <CardBody>
              <CardTitle tag="h5">{waste.title}</CardTitle>
              <CardText>{waste.subtitle}</CardText>
            </CardBody>
          </a>
        </Card>
      </div>
    );
  });
};

const RenderTipsList = ({ tipsList }) => {
  return tipsList.map((tip) => {
    return (
      <div key={tip.id}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{tip.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });
};

const Reduce = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <p className="page-title">minimize carbon output and waste</p>
          </Col>
          <Button
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
          >
            Suggest any additions to this page!
          </Button>
        </Row>
        <Row>
          <Col>
            <h3>Goods the encourage longevity</h3>
          </Col>
        </Row>
        <RenderProductList productsList={props.products} />
        <Row>
          <Col>
            <h3>Waste and Recycling Services</h3>
          </Col>
        </Row>
        <RenderWasteList wasteList={props.waste} />
        <Row>
          <Col>
            <h3>Tips and Tricks</h3>
          </Col>
        </Row>
        <RenderTipsList tipsList={props.tips} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Reduce;
