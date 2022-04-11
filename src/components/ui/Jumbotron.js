// Project Goals - 
// Functionality
// Inform - suggest article button comes up with a modal - link, short description, submit - secondary modal to say thank you
// Connect - how it looks like, four toggle buttons (all - chat - trade - other), name and message
// Connect - potentially a place for other users to respond, an input box to map within that object as an array
//  Tools - take value from calculator and put it into a modal which displays text and water footprint information 
// Collab - take form data and echo it back to the user for confirmation, if confirmed, say thank you and reset form , if not confirmed, go back to form


// Styling 
// Get rid of borders around icons
// Make icons bigger
// Make card text smaller 
// Change overall page icons to be less bold
// Inform - cards stretch across screen, responsive images
// Connect - format date and how comments are layed out 
// Reduce - layout, flexbox cards, potentially a carousel
// Get ride of extra line through the navbar component 
// Format collaborators to look a little better, add title 

import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from './Jumbotron.module.css'

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
      <Jumbotron fluid className={styles.jumbo}>
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
