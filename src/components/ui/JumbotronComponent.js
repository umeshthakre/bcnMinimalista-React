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

class Jumbo extends Component {
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
      <Jumbotron fluid>
        <NavLink to="/titlemain">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>barcelona minimalista</h1>
              </div>
            </div>
          </div>
        </NavLink>
      </Jumbotron>
    );
  }
}

export default Jumbo;
