import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/3-HomeComponent.css";
import { Loading } from "./13-LoadingComponent";
import { Fade, Stagger } from "react-animation-components";


const RenderHomeCards = ({ cardList, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (errMess) {
    return (
      <div className="container">
        <div className="row">{errMess}</div>
      </div>
    );
  }
  return (
    <Stagger in>
      {cardList.map((card) => {
        return (
          <Fade in key={card.id}>
            <div className="">
              <NavLink to={card.link}>
                <Row>
                  <Col className="carousel-inner">
                    <img
                      src={card.src}
                      alt=""
                      className="home__img-fluid"
                    ></img>
                    <div className="carousel-caption background text">
                      <p className="carousel-caption-p">{card.name}</p>
                    </div>
                  </Col>
                </Row>
              </NavLink>
            </div>
          </Fade>
        );
      })}
    </Stagger>
  );
}

const Home = (props) => {
  return (
    <Container fluid>
      <RenderHomeCards
        cardList={props.homeList}
        isLoading={props.homeLoading}
        errMess={props.homeErrMess}
      />
    </Container>
  );
};

export default Home;
