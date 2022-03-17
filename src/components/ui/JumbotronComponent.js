import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/JumbotronComponent.css";

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
      <Jumbotron fluid className="jumbotron-fluid">
        <NavLink to="/home">
          <div className="container-fluid">
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
