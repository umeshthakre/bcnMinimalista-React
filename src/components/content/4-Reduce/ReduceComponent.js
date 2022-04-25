import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../../ui/Footer";
import ProductList from "./ProductList";
import WasteList from "./WasteList";
import TipsList from "./Tips-List";
import styles from "./ReduceComponent.module.css";

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
        <Row
          style={{
            flexDirection: "row",
            margin: "10px",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "space-evenly",
          }}
        >
          <ProductList productsList={props.products} />{" "}
        </Row>
        <Row>
          <Col>
            <h3>Waste and Recycling Services</h3>
          </Col>
        </Row>
        <Row
          style={{
            flexDirection: "row",
            margin: "10px",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "space-evenly",
          }}
        >
          <WasteList wasteList={props.waste} />{" "}
        </Row>
        <Row>
          <Col>
            <h3>Tips and Tricks</h3>
          </Col>
        </Row>
        <Row
          style={{
            flexDirection: "row",
            margin: "10px",
            padding: "10px",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "space-evenly",
          }}
        >
          <TipsList tips={props.tips} />
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Reduce;
