import React from "react";
import { connect } from "react-redux";

import Question from "./Question";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import { getQuestionsToShow } from "../../utils/Utils";

class QuestionsContainer extends React.Component {
  state = {
    selectedTab: 0,
  };
  handleChange = (e, newValue) => {
    this.setState(() => ({
      selectedTab: newValue,
    }));
  };

  render() {
    const { selectedTab } = this.state;
    const { questions, users, authedUser } = this.props;

    const questionsToShow = getQuestionsToShow(
      questions,
      users,
      authedUser,
      selectedTab
    );

    return (
      <div>
        <div className="question-container">
          <Tabs
            value={this.state.selectedTab}
            onChange={this.handleChange}
            variant="fullWidth"
            style={{ margin: "10px" }}
          >
            <Tab label="Unanswered" />
            <Tab label="Answered" />
          </Tabs>
          {questionsToShow.length === 0 ? (
            <div>There are no questions here</div>
          ) : (
            <List>
              {questionsToShow.map((question) => (
                <ListItem divider key={question.id}>
                  <Question key={question.id} question={question} />
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionsContainer);
