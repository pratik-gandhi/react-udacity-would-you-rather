import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExitToApp from "@material-ui/icons/ExitToApp";

import { unsetAuthedUser as logout } from "../../actions/autheduser";

const toolbarStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "row wrap",
  alignItems: "center",
  justifyContent: "right",
};

const titleStyle = { flexGrow: 6, textAlign: "center" };

const divStyle = { flexGrow: 1 };

const NavBar = (props) => {
  return (
    <Toolbar style={toolbarStyle}>
      <ButtonGroup
        style={divStyle}
        size="large"
        aria-label="navigation buttons"
        variant="text"
      >
        <Button component={Link} to="/" edge="start" secondary="true">
          Dashboard
        </Button>
        <Button component={Link} to="/question/add">
          Add Question
        </Button>
        <Button component={Link} to="/leaderboard">
          Leaderboard
        </Button>
      </ButtonGroup>
      <Typography variant="h5" noWrap style={titleStyle}>
        Would you rather?
      </Typography>
      <div style={divStyle}>Welcome, {props.authedUser}</div>
      <IconButton
        style={divStyle}
        edge="end"
        onClick={() => props.dispatch(logout())}
      >
        <ExitToApp />
      </IconButton>
    </Toolbar>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NavBar);
