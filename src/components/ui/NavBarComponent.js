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
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';

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
      <Navbar dark expand="md" sticky="top">
        <div className="container">
          {/* <NavbarBrand className="mr-auto" href="/">
            <img height="30" width="30" />
          </NavbarBrand> */}
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="navbar" navbar>
              <NavItem className="navitem">
                <NavLink className="nav-link" to="/inform">
                  <i className="fa fa-home fa-lg" /> Inform
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
        </div>
      </Navbar>
    );
  }
}

export default NavComp;
