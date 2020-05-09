import React from "react";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

import { _saveQuestionAnswer } from "../../api/_DATA";

import { setUsers, answerQuestion } from "../../actions/users";
import { setQuestions, markQuestionAnswered } from "../../actions/questions";
import Choices from "./Choices";

class Question extends React.Component {
  chooseAnswer = (answer) => {
    const { dispatch, authedUser, users, question, questions } = this.props;

    _saveQuestionAnswer({ authedUser, qid: question.id, answer }).catch(() => {
      alert("Failed to save answer for question. Please try again!");
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
    });

    dispatch(answerQuestion(authedUser, question.id, answer));
    dispatch(markQuestionAnswered(authedUser, question.id, answer));
  };

  render() {
    const { authedUser, users, question } = this.props;

    const user = users[authedUser];
    const answered = user.answers[question.id] !== undefined;

    return (
      <div className="question">
        <div className="question-info">
          <Avatar
            alt={question.author}
            src={users[question.author].avatarURL}
          />
          <div className="question-desc">
            <span>
              {question.author} asked, would you rather
            </span>
            {answered && (<span className="question-subscript">You answered this question</span>)}
          </div>
        </div>
        <Choices
          authedUser={authedUser}
          answered={answered}
          question={question}
          chooseAnswer={this.chooseAnswer}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { question }) => {
  return {
    users,
    authedUser,
    question,
    questions,
  };
};

export default connect(mapStateToProps)(Question);
