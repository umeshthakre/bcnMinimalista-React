import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/1-JumbotronComponent.css";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <Jumbotron fluid className="jumbo">
        <NavLink to="/home">
          <Container fluid>
            <Row>
              <Col>
                <h1>barcelona minimalista</h1>
              </Col>
            </Row>
          </Container>
        </NavLink>
      </Jumbotron>
    );
  }
}

export default Jumbo;
