import React, { Component } from "react";
import Home from "./3-HomeComponent";
import Inform from "./4-InformComponent";
import Connect from "./5-ConnectComponent";
import Reduce from "./6-ReduceComponent";
import Tech from "./7-TechComponent";
import Rescue from "./8-RescueComponent";
import Collab from "./9-CollabComponent";
import Footer from "./10-FooterComponent";
import Jumbo from "./1-JumbotronComponent";
import NavComp from "./2-NavBarComponent";
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
