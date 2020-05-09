import React from "react";
import { connect } from "react-redux";

import QuestionsContainer from "./QuestionsContainer";

import { mapStateToLoginProp, redirectToLogin } from "../utils/Utils";

class Dashboard extends React.Component {
  render() {
    console.log("loading Dashboard")
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return redirectToLogin(this.props.history.location.pathname);
    }
    return (
      <div>
        <QuestionsContainer />
      </div>
    );
  }
}

export default connect(mapStateToLoginProp)(Dashboard);
