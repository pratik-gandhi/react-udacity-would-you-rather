import React from "react";

const Vote = (props) => {
  const { optionVotes, totalVotes } = props;
  const optionPercentage = ((optionVotes / totalVotes) * 100).toFixed(2);

  const optionStyle = {
    flex: `${optionVotes}`,
  };

  if (optionVotes <= 0) {
    optionStyle["display"] = "none";
  }

  return (
    <div className="vote-count" style={optionStyle}>
      {`${optionVotes} Votes (${optionPercentage}%)`}
    </div>
  );
};

export default Vote;
