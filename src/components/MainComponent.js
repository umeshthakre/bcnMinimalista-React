import React, { Component } from "react";
import Title from "./content/TitleComponent";
import Inform from "./content/InformComponent";
import { INFORM } from "../shared/inform";
import Connect from "./content/ConnectComponent";
import Reduce from "./content/ReduceComponent";
import Tech from "./content/TechComponent";
import Rescue from "./content/RescueComponent";
import Collab from "./content/CollabComponent";
import Footer from "./ui/FooterComponent";
import Jumbo from "./ui/JumbotronComponent";
import NavComp from "./ui/NavBarComponent";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inform: INFORM,
      }
    }
  
  render() {
    return (
      <div>
        <Jumbo />
        <NavComp />
        <Switch>
          <Route path="/titlemain" component={Title} />
          <Route path="/inform" component={Inform} render={()=><Inform informList={this.state.inform}/>}/>
          <Route path="/connect" component={Connect} />
          <Route path="/reduce" component={Reduce} />
          <Route path="/tech" component={Tech} />
          <Route path="/rescue" component={Rescue} />
          <Route path="/collab" component={Collab} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
