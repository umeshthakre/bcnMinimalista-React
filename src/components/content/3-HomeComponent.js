import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/3-HomeComponent.css";

function RenderHomeCards({ cardList }) {
  return (
    <Container fluid>
      <NavLink to={cardList.link}>
        <Row>
          <Col className="carousel-inner">
            <img src={cardList.src} className="home__img-fluid"></img>
            <div className="carousel-caption background text">
              <p className="carousel-caption-p">{cardList.name}</p>
            </div>
          </Col>
        </Row>
      </NavLink>
    </Container>
  );
}

const Home = (props) => {
  let cardList;
  if (props.home) {
    cardList = props.home.map((card) => {
      return (
        <div key={card.id} className="col-md-5 m-1">
          <RenderHomeCards cardList={card} />
        </div>
      );
    });
  }
  return <div>{cardList}</div>;
};

export default Home;
