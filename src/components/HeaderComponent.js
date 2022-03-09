import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">barcelona minimalista</div>
            </div>
          </div>
        </Jumbotron>
        <Navbar expand="md">
          <NavbarToggler/>
          <Collapse >
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/inform">
                     Inform
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/connect">
                     Connect
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/reduce">
                     Reduce
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/tech">
                     Tech and Tools
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/rescue">
                     Rescue
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/collab">
                     Collab
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </React.Fragment>
  );
};

export default Header;
