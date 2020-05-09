import React from "react";
import { connect } from "react-redux";

import QuestionsContainer from "../questions/QuestionsContainer";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <QuestionsContainer />
      </div>
    );
  }
}

export default connect()(Dashboard);
