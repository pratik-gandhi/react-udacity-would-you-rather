import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

import { addQuestion } from "../../actions/questions";
import { addQuestionToUser } from "../../actions/users";
import { _saveQuestion } from "../../api/_DATA";

class AddQuestion extends React.Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const question = {
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText,
      author: this.props.authedUser,
    };
    _saveQuestion(question)
      .then((q) => {
        this.props.dispatch(addQuestion(q));
        this.props.dispatch(addQuestionToUser(this.props.authedUser, q.id));
        this.setState((currentState) => ({
          ...currentState,
          toHome: true,
        }));
      })
      .catch((e) => alert(`Could not add question. Please try again : ${e}`));
  };

  handleChange = (key, value) => {
    this.setState((currentState) => ({
      ...currentState,
      [key]: value.trim(),
    }));
  };

  isInputValid = () => {
    const { optionOneText, optionTwoText } = this.state;
    return (
      optionOneText &&
      optionOneText.length > 0 &&
      optionTwoText &&
      optionTwoText.length > 0 &&
      optionOneText !== optionTwoText
    );
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />;
    }

    return (
      <Container className="form-container">
        <h4>Would you rather</h4>
        <form onSubmit={this.onSubmit} className="add-question-form">
          <FormControl>
            <InputLabel htmlFor="optionOneText">First option</InputLabel>
            <Input
              id="optionOneText"
              aria-describedby="optionOneHelp"
              fullwidth="true"
              value={this.state.optionOne}
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
            />
            <FormHelperText id="optionOneHelp">
              Enter first option.
            </FormHelperText>
          </FormControl>
          <h5 style={{ padding: "10px", margin: "10px" }}>or</h5>
          <FormControl>
            <InputLabel htmlFor="optionTwoText">Second option</InputLabel>
            <Input
              id="optionTwoText"
              aria-describedby="optionTwoHelp"
              fullwidth="true"
              value={this.state.optionTwo}
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
            />
            <FormHelperText id="optionTwoHelp">
              Enter second option.
            </FormHelperText>
          </FormControl>
          <Button disabled={!this.isInputValid()} type="submit">
            Add
          </Button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(AddQuestion);
