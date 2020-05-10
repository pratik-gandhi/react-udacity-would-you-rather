import React from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const style = {
  backgroundColor : "#6cbf84",
}
class Leaderboard extends React.Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <div className="leaderboard-container">
        <h3> Leaderboard </h3>
        <TableContainer component={Paper}>
          <Table className="leaderboard-table" aria-label="Leaderboard">
            <TableHead>
              <TableRow>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Questions Asked</TableCell>
                <TableCell align="center">Questions Answered</TableCell>
                <TableCell align="center">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} style={user.id === authedUser ? style : {}}>
                  <TableCell align="center" component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="center">{user.questions}</TableCell>
                  <TableCell align="center">{user.answers}</TableCell>
                  <TableCell align="center">
                    {user.questions + user.answers}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const formattedUsers = Object.keys(users)
    .filter((key) => users.hasOwnProperty(key))
    .map((key) => users[key])
    .map((user) => ({
      id: user.id,
      name: user.name,
      questions: user.questions.length,
      answers: Object.keys(user.answers).filter((key) =>
        user.answers.hasOwnProperty(key)
      ).length,
    }))
    .sort((user1, user2) => {
      return (
        user2.answers + user2.questions - (user1.answers + user1.questions)
      );
    });

    console.log(`Formatted users = ${JSON.stringify(formattedUsers)}`)
  return {
    authedUser,
    users: formattedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
