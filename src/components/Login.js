import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { setAuthedUser } from "../actions/autheduser";
import {
  MuiThemeProvider,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";

class Login extends React.Component {
//   state = {
//     value: "",
//   };

  handleSubmit = (userId) => {
    this.props.dispatch(setAuthedUser(userId));
  };  
  
//   handleSubmit = () => {
//     this.state.value && this.props.dispatch(setAuthedUser(this.state.value));
//   };

//   handleChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     });
//   };

  render() {
    console.log("-------------------", this.props);

    if (this.props.authedUser !== null) {
      const redirectUrl = this.props.location.state.redirectedFrom
        ? this.props.location.state.redirectedFrom
        : "/";
      return <Redirect to={redirectUrl}></Redirect>;
    }

    return (
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Select User</Typography>
          </Toolbar>
        </AppBar>
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
                    <Paper
                      value={user.id}
                      style={{ height: 200, width: 150 }}
                      onClick={() => this.handleSubmit(user.id)}
                    >
                      {user.name}
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );

    // return (
    //   <FormControl styles={{ minWidth: "120" }}>
    //     <InputLabel id="select-user-label">Select User</InputLabel>
    //     <Select
    //       labelId="select-user-label"
    //       id="select-user"
    //       value={this.state.value}
    //       onChange={this.handleChange}
    //     >
    //       <MenuItem value="">
    //         <em>None</em>
    //       </MenuItem>
    //       {Object.keys(this.props.users)
    //         .filter((key) => this.props.users.hasOwnProperty(key))
    //         .map((key) => this.props.users[key])
    //         .map((user) => (
    //           <MenuItem key={user.id} value={user.id}>
    //             {user.name}
    //           </MenuItem>
    //         ))}
    //     </Select>
    //     <FormHelperText>Select a user to login with</FormHelperText>
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       onClick={this.handleSubmit}
    //     >
    //       Login
    //     </Button>
    //   </FormControl>
    // );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Login);
