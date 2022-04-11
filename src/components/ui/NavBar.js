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
import styles from "./NavBar.module.css";

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
      <Navbar expand="sm" sticky="top">
        <Container>
          <NavbarToggler
            onClick={this.toggleNav}
            className={`${styles["me-2"]} ${styles.fa} ${styles["fa-bars"]}`}
          />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className={styles.navbar} navbar>
              <NavItem className={styles.navitem}>
                <NavLink to="/inform">
                  inform
                </NavLink>
              </NavItem>
              <NavItem className={styles.navitem}>
                <NavLink to="/connect">
                  connect
                </NavLink>
              </NavItem>
              <NavItem className={styles.navitem}>
                <NavLink to="/reduce">
                  reduce
                </NavLink>
              </NavItem>
              <NavItem className={styles.navitem}>
                <NavLink to="/tech">
                  tech & tools
                </NavLink>
              </NavItem>
              <NavItem className={styles.navitem}>
                <NavLink to="/rescue">
                  rescue
                </NavLink>
              </NavItem>
              <NavItem className={styles.navitem}>
                <NavLink to="/collab">
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

export default NavBar;
