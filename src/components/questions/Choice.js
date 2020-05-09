import React from "react";

const Choice = (props) => {
  const { choice, chooseAnswer, answered, selectedByUser } = props;

  const cursor = answered ? '' : 'pointer'

  return (
    <div className="question-option" style={{cursor: cursor}} onClick={chooseAnswer}>
      <p>{choice.text}</p>
      {answered && (
        <span>
          Selected by 
          {selectedByUser
            ? ` you and ${choice.votes.length - 1} other user(s)`
            : ` ${choice.votes.length} other user(s)`}
        </span>
      )}
    </div>
  );
};

export default Choice;
