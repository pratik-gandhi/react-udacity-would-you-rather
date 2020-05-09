import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Router, Route } from "react-router-dom";
import { LoadingBar } from "react-redux-loading";
import { createBrowserHistory } from "history";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import QuestionView from "./QuestionView";
import NotFound from "./NotFound";
import NavBar from "./NavBar"

class App extends React.Component {
  history = createBrowserHistory();

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading, isLoggedIn } = this.props;
    if (loading) {
      return (
        <Fragment>
          <LoadingBar loading={50} />
          <h3>App is loading...</h3>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {isLoggedIn && <NavBar />}
        <Router history={this.history}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/question/:id" component={QuestionView} />
            <Route exact path="/question/add" component={QuestionView} />
            <Route exact path="/" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    loading:
      Object.keys(questions).length === 0 || Object.keys(users).length === 0,
    isLoggedIn: authedUser !== null,
  };
}

export default connect(mapStateToProps)(App);
