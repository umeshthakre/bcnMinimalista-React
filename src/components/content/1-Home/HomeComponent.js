import React from "react";
import { Container } from "reactstrap";
import RenderHomeCards from './HomeCards';


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
