import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import UserCard from "./UserCard"
import { setAuthedUser } from "../../actions/autheduser";

class Login extends React.Component {
  handleSubmit = (userId) => {
    this.props.dispatch(setAuthedUser(userId));
  };

  render() {
    if (this.props.authedUser !== null) {
      const redirectUrl = this.props.location.state && this.props.location.state.redirectedFrom
        ? this.props.location.state.redirectedFrom
        : "/";
      return <Redirect to={redirectUrl}></Redirect>;
    }

    return (
      <Container maxWidth="sm">
        <h3 style={{ textAlign: "center" }}>Choose a user to login with</h3>
        <Grid
          container
          style={{ flexGrow: 1, width: "auto", margin: "1rem" }}
          spacing={2}
        >
          <Grid item>
            <Grid container justify="center" spacing={2}>
              {Object.keys(this.props.users)
                .filter((key) => this.props.users.hasOwnProperty(key))
                .map((key) => this.props.users[key])
                .map((user) => (
                  <Grid key={user.id} item>
                    <UserCard login={this.handleSubmit} user={user}/>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Login);
