import React, { Component } from "react";
import Home from "./3-HomeComponent";
import Inform from "./4-InformComponent";
import Connect from "./5-ConnectComponent";
import Reduce from "./6-ReduceComponent";
import Tech from "./7-TechComponent";
import Rescue from "./8-RescueComponent";
import Collab from "./9-CollabComponent";
import Jumbo from "./1-JumbotronComponent";
import NavBar from "./2-NavBarComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { addComment, fetchInform, fetchHome } from "../../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    home: state.home,
    inform: state.inform,
    products: state.products,
    waste: state.waste,
    tips: state.tips,
    tools: state.tools,
    collab: state.collab,
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  addComment: (id, name, forum, message, date) =>
    addComment(id, name, forum, message, date),
  fetchInform: () => fetchInform(),
  fetchHome: () => fetchHome(),
  resetCollabForm: () => actions.reset("collabForm"),
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchInform();
    this.props.fetchHome();
  }
  render() {
    return (
      <div>
        <Jumbo />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route
                exact
                path="/"
                default
                render={() => (
                  <Home
                    homeList={this.props.home.home}
                    homeLoading={this.props.home.isLoading}
                    homeErrMess={this.props.home.errMess}
                  />
                )}
              />
              <Route
                path="/home"
                default
                render={() => (
                  <Home
                    homeList={this.props.home.home}
                    homeLoading={this.props.home.isLoading}
                    homeErrMess={this.props.home.errMess}
                  />
                )}
              />
              <div>
                <NavBar />
                <Route
                  path="/inform"
                  render={() => (
                    <Inform
                      informList={this.props.inform.inform}
                      informLoading={this.props.inform.isLoading}
                      informErrMess={this.props.inform.errMess}
                    />
                  )}
                />
                <Route
                  path="/connect"
                  render={() => (
                    <Connect
                      comments={this.props.comments}
                      addComment={this.props.addComment}
                    />
                  )}
                />
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
                  render={() => (
                    <Collab
                      collab={this.props.collab}
                      resetCollabForm={this.props.resetCollabForm}
                    />
                  )}
                />
              </div>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
