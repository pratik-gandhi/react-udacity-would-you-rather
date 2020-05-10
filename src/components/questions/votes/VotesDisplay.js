import React from "react";
import Vote from "./Vote"

const VotesDisplay = (props) => {

  const {optionOneVotes, optionTwoVotes} = props  

  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <div className="vote-container">
      <Vote optionVotes={optionOneVotes} totalVotes={totalVotes} />
      <Vote optionVotes={optionTwoVotes} totalVotes={totalVotes} />
    </div>
  );
};

export default VotesDisplay;
