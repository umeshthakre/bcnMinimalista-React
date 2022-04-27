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
import "../../styles/ui/NavBar.css";

class NavBar extends Component {
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
      <Navbar expand="sm" sticky="top" className="navbar-container">

          <NavbarToggler onClick={this.toggleNav} className="navbar__toggler fa-bars" />

          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="navbar__nav" navbar>
              <NavItem className="navbar__navitem">
                <NavLink to="/inform">inform</NavLink>
              </NavItem>
              <NavItem className="navbar__navitem">
                <NavLink to="/connect">connect</NavLink>
              </NavItem>
              <NavItem className="navbar__navitem">
                <NavLink to="/reduce">reduce</NavLink>
              </NavItem>
              <NavItem className="navbar__navitem">
                <NavLink to="/tech">tech & tools</NavLink>
              </NavItem>
              <NavItem className="navbar__navitem">
                <NavLink to="/rescue">rescue</NavLink>
              </NavItem>
              <NavItem className="navbar__navitem">
                <NavLink to="/collab">collab</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

      </Navbar>
    );
  }
}

export default NavBar;
