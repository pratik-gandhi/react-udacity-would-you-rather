import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { handleInitialData } from "../actions/shared";

import Login from "./login/Login";

import Dashboard from "./layouts/Dashboard";
import Leaderboard from "./layouts/Leaderboard";

import NotFound from "./error/NotFound";

import NavBar from "./navigation/NavBar";
import ProtectedRoute from "./navigation/ProtectedRoute";

import QuestionView from "./questions/QuestionView";
import AddQuestion from "./questions/AddQuestion";

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
          <Backdrop open>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Fragment>
      );
    }

    return (
      <div>
        <div>
          {isLoggedIn && <NavBar />}
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <ProtectedRoute exact path="/leaderboard" component={Leaderboard} />
            <ProtectedRoute
              exact
              path="/question/:id"
              component={QuestionView}
            />
            <ProtectedRoute
              exact
              path="/question/add"
              component={AddQuestion}
            />
            <ProtectedRoute exact path="/" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
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
