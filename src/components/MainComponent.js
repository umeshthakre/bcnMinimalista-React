import React, { Component, useState } from "react";
import Home from "./content/HomeComponent";
import Inform from "./content/InformComponent";
import Connect from "./content/ConnectComponent";
import Reduce from "./content/ReduceComponent";
import Tech from "./content/TechComponent";
import Rescue from "./content/RescueComponent";
import Collab from "./content/CollabComponent";
import Footer from "./ui/FooterComponent";
import Jumbo from "./ui/JumbotronComponent";
import NavComp from "./ui/NavBarComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    home: state.home,
    inform: state.inform,
    products: state.products,
    waste: state.waste,
    tips: state.tips,
    tools: state.tools,
    collab: state.collab,
  };
};

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Switch>
          <Route path="/home" render={() => <Home home={this.props.home} />} />
          <div>
            <NavComp />
            <Route
              path="/inform"
              render={() => <Inform informList={this.props.inform} />}
            />
            <Route path="/connect" component={Connect} />
            <Route
              path="/reduce"
              render={() => (
                <Reduce
                  products={this.props.products}
                  waste={this.props.waste}
                  tips={this.props.tips}
                />
              )}
            />
            <Route
              path="/tech"
              render={() => <Tech tools={this.props.tools} />}
            />
            <Route path="/rescue" component={Rescue} />
            <Route
              path="/collab"
              render={() => <Collab collab={this.props.collab} />}
            />
          </div>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
