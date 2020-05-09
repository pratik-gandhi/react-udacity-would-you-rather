import React from "react";
import { connect } from "react-redux";

import { mapStateToLoginProp, redirectToLogin } from "../utils/Utils";

class Leaderboard extends React.Component {
  render() {
    console.log("loading leaderboard")
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
        return redirectToLogin(this.props.history.location.pathname)
    }
    return <div>Leaderboard</div>;
  }
}

export default connect(mapStateToLoginProp)(Leaderboard);
