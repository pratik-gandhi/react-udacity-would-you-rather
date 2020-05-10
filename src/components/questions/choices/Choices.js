import React from "react";

import Choice from "./Choice";

const Choices = (props) => {
  const { question, answered, authedUser, chooseAnswer } = props;
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  return (
    <div className="question-answers">
      <Choice
        choice={question.optionOne}
        authedUser={authedUser}
        answered={answered}
        totalVotes={totalVotes}
        selectedByUser={question.optionOne.votes.indexOf(authedUser) >= 0}
        chooseAnswer={(e) => !answered && chooseAnswer(e, "optionOne")}
      />
      <div className="or">or</div>
      <Choice
        choice={question.optionTwo}
        authedUser={authedUser}
        answered={answered}
        totalVotes={totalVotes}
        selectedByUser={question.optionTwo.votes.indexOf(authedUser) >= 0}
        chooseAnswer={(e) => !answered && chooseAnswer(e, "optionTwo")}
      />
    </div>
  );
};

export default Choices;
