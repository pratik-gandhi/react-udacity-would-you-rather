import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { unsetAuthedUser as logout } from "../actions/autheduser";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/questions/add">Add Question</Link>
      <div>Welcome, {props.authedUser}</div>
      <button onClick={() => props.dispatch(logout())}>Logout</button>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavBar);
