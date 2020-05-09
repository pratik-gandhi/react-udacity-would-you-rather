import React from "react";
import { connect } from "react-redux";

import { mapStateToLoginProp } from "../../utils/Utils";

class QuestionView extends React.Component {
  render() {
    return <div>Question View</div>;
  }
}

export default connect(mapStateToLoginProp)(QuestionView);
