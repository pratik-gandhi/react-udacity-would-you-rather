import React from "react";
import { connect } from "react-redux";
import NotFound from "../error/NotFound";
import Question from "./Question";
import VotesDisplay from "./votes/VotesDisplay";

class QuestionView extends React.Component {
  render() {
    const { authedUser, questions, match } = this.props;

    const qid = match.params.id;
    const question = questions[qid];

    if (!question) {
      return <NotFound />;
    }

    const answered =
      question.optionOne.votes.indexOf(authedUser) >= 0 ||
      question.optionTwo.votes.indexOf(authedUser) >= 0;

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    return (
      <div className="question-view">
        <Question question={question} />
        {answered && (
          <VotesDisplay
            optionOneVotes={optionOneVotes}
            optionTwoVotes={optionTwoVotes}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    questions,
  };
};
export default connect(mapStateToProps)(QuestionView);
