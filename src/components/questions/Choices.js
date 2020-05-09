import React from "react";

import Choice from "./Choice";

const Choices = (props) => {
  
  const { question, answered, authedUser, chooseAnswer } = props;

  return (
    <div className="question-answers">
      <Choice
        choice={question.optionOne}
        authedUser={authedUser}
        answered={answered}
        selectedByUser={question.optionOne.votes.indexOf(authedUser) >= 0}
        chooseAnswer={() => !answered && chooseAnswer("optionOne")}
      />
      <div className="or">or</div>
      <Choice
        choice={question.optionTwo}
        authedUser={authedUser}
        answered={answered}
        selectedByUser={question.optionTwo.votes.indexOf(authedUser) >= 0}
        chooseAnswer={() => !answered && chooseAnswer("optionTwo")}
      />
    </div>
  );
};

export default Choices;
