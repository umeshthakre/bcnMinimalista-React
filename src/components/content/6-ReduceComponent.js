import React, { Component } from "react";
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
  return productsList.map((product) => {
    return (
      <div key={product.id} className="col-md-5 m-1">
        <Card className="card">
          <a href={product.site} target="_blank" rel="noreferrer">
            <CardImg
              alt="alt"
              src={product.src}
              left
              width="10%"
              className="card-img"
            />

            <CardBody className="card-body">
              <CardTitle tag="h5" className="card-title">
                {product.title}
              </CardTitle>
              <CardText className="card-text">{product.price}</CardText>
            </CardBody>
          </a>
        </Card>
      </div>
    );
  });
}
function RenderWasteList({ wasteList }) {
  return wasteList.map((waste) => {
    return (
      <div key={waste.id} className="col-md-5 m-1">
        <Card>
          <a href={waste.site} target="_blank" rel="noreferrer">
            <CardBody className="card-body text-only">
              <CardTitle tag="h5" className="card-title waste-title">
                {waste.title}
              </CardTitle>
              <CardText className="card-text">{waste.subtitle}</CardText>
            </CardBody>
          </a>
        </Card>
      </div>
    );
  });
}

function RenderTipsList({ tipsList }) {
  return tipsList.map((tip) => {
    return (
      <div key={tip.id} className="col-md-5 m-1">
        <Card>
          <CardBody className="card-body text-only">
            <CardTitle tag="h5" className="card-title waste-title">
              {tip.title}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });
}

class Reduce extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <RenderProductList productsList={this.props.products} />
          <Row>
            <Col>
              <h3>Waste and Recycling Services</h3>
            </Col>
          </Row>
          <RenderWasteList wasteList={this.props.waste} />
          <Row>
            <Col>
              <h3>Tips and Tricks</h3>
            </Col>
          </Row>
          <RenderTipsList tipsList={this.props.tips} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Reduce;

//button in case used for later

/* <Row>
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
</Row> */
