import React, { Component } from "react";
import Inform from "./content/InformComponent";
import Connect from "./content/ConnectComponent";
import Reduce from "./content/ReduceComponent";
import Tech from "./content/TechComponent";
import Rescue from "./content/RescueComponent";
import Collab from "./content/CollabComponent";
// import Header from "./ui/HeaderComponent";
import Footer from "./ui/FooterComponent";
import TitleMain from "./TitleMain";
import Title from "./content/TitleComponent";
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
import Jumbo from "./ui/JumbotronComponent";
import NavComp from "./ui/NavBarComponent";

const Main = () => {
  return (
    <div>
      <Jumbo/>
      <NavComp/>
      <Switch>
      <Route path="/titlemain" component={TitleMain} />
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
