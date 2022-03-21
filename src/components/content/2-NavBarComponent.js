import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/2-NavBarComponent.css";

class NavComp extends Component {
  constructor(props) {
    super(props);
    //binds the function to component, when togglenav is called the this keyword will refer corectly to component
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
      <Navbar expand="sm" sticky="top">
        <Container>
          <NavbarToggler onClick={this.toggleNav} className="me-2 fa fa-bars" />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="navbar" navbar>
              <NavItem className="navitem">
                <NavLink className="nav-link" to="/inform">
                  inform
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/connect">
                  connect
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/reduce">
                  reduce
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tech">
                  tech & tools
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/rescue">
                  rescue
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/collab">
                  collab
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavComp;
