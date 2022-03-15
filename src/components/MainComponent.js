import React, { Component } from "react";
import Title from "./content/TitleComponent";
import Inform from "./content/InformComponent";
import { INFORM } from "../shared/inform";
import Connect from "./content/ConnectComponent";
import Reduce from "./content/ReduceComponent";
import { REDUCEPRODUCTS } from "../shared/reduceproducts.js"
import { REDUCEWASTE } from "../shared/reducewaste.js"
import { REDUCETIPS } from "../shared/reducetips.js"
import Tech from "./content/TechComponent";
import Rescue from "./content/RescueComponent";
import Collab from "./content/CollabComponent";
import { COLLAB } from "../shared/collab"
import Footer from "./ui/FooterComponent";
import Jumbo from "./ui/JumbotronComponent";
import NavComp from "./ui/NavBarComponent";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inform: INFORM,
        products: REDUCEPRODUCTS,
        waste: REDUCEWASTE,
        tips: REDUCETIPS,
        collab: COLLAB
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
          <Route path="/reduce" component={Reduce} render={()=><Reduce products={this.state.products} waste={this.state.waste} tips={this.state.tips}/>}/>
          <Route path="/tech" component={Tech} />
          <Route path="/rescue" component={Rescue} />
          <Route path="/collab" component={Collab} render={()=><Collab collab={this.state.collab}/>}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
