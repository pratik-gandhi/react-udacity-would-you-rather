import React from "react";
import { connect } from "react-redux";

import { mapStateToLoginProp, redirectToLogin } from "../utils/Utils";

class QuestionView extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
        return redirectToLogin(this.props.history.location.pathname);
    }
    return <div>Question View</div>;
  }
}

export default connect(mapStateToLoginProp)(QuestionView);
