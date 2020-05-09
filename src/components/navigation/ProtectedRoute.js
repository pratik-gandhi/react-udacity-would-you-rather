import React from "react";
import { Route } from "react-router-dom";
import { redirectToLogin } from "../../utils/Utils";
import { connect } from "react-redux";

export const ProtectedRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return redirectToLogin(props.history.location.pathname);
        }
      }}
    ></Route>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    isLoggedIn: authedUser !== null,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
