import React from "react";
import Votes from "./Votes";

import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';

const Choice = (props) => {
  const { choice, chooseAnswer, answered, selectedByUser, totalVotes } = props;

  const cursor = answered ? "not-allowed" : "pointer";
  const opacity = answered ? { opacity: "80%" } : { opacity: "100%" };

  return (
    <div
      className="question-option"
      style={{ ...opacity, cursor: cursor}}
      onClick={chooseAnswer}
    >
      <p>{choice.text}</p>
      {answered && (
        <Votes
          selectedByUser={selectedByUser}
          votes={choice.votes.length}
          totalVotes={totalVotes}
        />
      )}
      {selectedByUser && <BeenhereOutlinedIcon className="selected"/>}
    </div>
  );
};

export default Choice;
