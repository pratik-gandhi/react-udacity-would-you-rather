import React from "react";

const format = (selectedByUser, votes) => {
  if (selectedByUser) {
    return votes - 1 > 0 ? `you and ${votes - 1} other user(s)` : "only you";
  } else {
    return votes > 0 ? ` ${votes} other user(s)` : "no one";
  }
};
const Votes = (props) => {
  const { selectedByUser, votes } = props;
  return (
    <span style={{fontStyle: "italic", fontSize: "smaller"}}>
      Picked by {format(selectedByUser, votes)}
    </span>
  );
};

export default Votes;
