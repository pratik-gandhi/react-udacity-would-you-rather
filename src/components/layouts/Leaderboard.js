import React from "react";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

class Leaderboard extends React.Component {
  render() {
    return <div>Leaderboard</div>;
  }
}

export default withRouter(connect()(Leaderboard));
