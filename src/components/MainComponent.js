import React, { Component } from "react";
import Home from "./HomeComponent";
import Inform from "./InformComponent";
import Connect from "./ConnectComponent";
import Reduce from "./ReduceComponent";
import Tech from "./TechComponent";
import Rescue from "./RescueComponent";
import Collab from "./CollabComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/inform" component={Inform} />
        <Route path="/connect" component={Connect} />
        <Route path="/reduce" component={Reduce} />
        <Route path="/tech" component={Tech} />
        <Route path="/rescue"component={Rescue}/>
        <Route path="/collab" component={Collab} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
