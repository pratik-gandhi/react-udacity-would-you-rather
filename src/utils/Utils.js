import React from "react";
import { Redirect } from "react-router-dom";

export const mapStateToLoginProp = (state) => {
  return {
    isLoggedIn: state.authedUser !== null,
  };
};

export const redirectToLogin = (redirectedFrom) => {
  return (
    <Redirect
      push
      to={{
        pathname: "/login",
        state: { redirectedFrom },
      }}
    ></Redirect>
  );
};
