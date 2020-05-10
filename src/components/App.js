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

import {
  HOME_ROUTE,
  LEADERBOARD_ROUTE,
  LOGIN_ROUTE,
  ADD_QUESTION_ROUTE,
  VIEW_QUESTION_ROUTE,
} from "../routes/Routes";
import { Snackbar } from "@material-ui/core";

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
            <Route exact path={LOGIN_ROUTE} component={Login}></Route>
            <ProtectedRoute
              exact
              path={LEADERBOARD_ROUTE}
              component={Leaderboard}
            />
            <ProtectedRoute
              exact
              path={VIEW_QUESTION_ROUTE}
              component={QuestionView}
            />
            <ProtectedRoute
              exact
              path={ADD_QUESTION_ROUTE}
              component={AddQuestion}
            />
            <ProtectedRoute exact path={HOME_ROUTE} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
        {this.props.showMessage && (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.props.showMessage}
            message="Thank you for voting! The question has been moved to 'Answered
                  Questions' section"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users, showMessage }) {
  return {
    loading:
      Object.keys(questions).length === 0 || Object.keys(users).length === 0,
    isLoggedIn: authedUser !== null,
    showMessage,
  };
}

export default connect(mapStateToProps)(App);
