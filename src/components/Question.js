import React from "react";
import { connect } from "react-redux";

class Question extends React.Component {
  render() {
    const { authedUser, question } = this.props;
    return (
      <div className="question">
        <div className="question-info">
          <div> Author - {question.author} </div>
          <div>Id - {question.id}</div>
        </div>
        <div className="question-answers">
          <div className="question-option">
            <p>{question.optionOne.text}</p>
            <span>Selected by {question.optionOne.votes.length} </span>
          </div>
          <div className="question-option">
            <p>{question.optionTwo.text}</p>
            <span>Selected by {question.optionTwo.votes.length} </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }, { question }) => {
  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Question);
