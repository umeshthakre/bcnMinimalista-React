import React from 'react';
import { Row, Col, CardBody, CardTitle, CardImg } from 'reactstrap';
import { NavLink } from "react-router-dom";


function RenderHomeCards ({ cardList }) {
    return (
      <Row>
          <NavLink to={cardList.link}>
          <Col xs="9">
            <CardBody>
              <CardTitle tag="h5">{cardList.name}</CardTitle>
                <CardImg src={cardList.src}></CardImg>
            </CardBody>
          </Col>
          </NavLink>
      </Row>
    );
  }

const Home = props => {

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
    return <div>
    {cardList}
    </div>
}

export default Home;