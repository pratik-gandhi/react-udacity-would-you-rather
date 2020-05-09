import React from "react";
import { Redirect } from "react-router-dom";

export const mapStateToLoginProp = (state) => {
  return {
    isLoggedIn: state.authedUser !== null,
  };
};

export const redirectToLogin = (redirectedFrom) => {
  return (
    <Redirect
      push
      to={{
        pathname: "/login",
        state: { redirectedFrom },
      }}
    ></Redirect>
  );
};

export const getQuestionsToShow = (
  questions,
  users,
  authedUser,
  selectedTab
) => {
  const sortedQuestions = Object.keys(questions)
    .filter((key) => questions.hasOwnProperty(key))
    .map((key) => questions[key])
    .sort((a, b) => b.timestamp - a.timestamp);

  return selectedTab === 0
    ? sortedQuestions.filter(
        (question) => !users[authedUser].answers[question.id]
      )
    : sortedQuestions.filter(
        (question) => users[authedUser].answers[question.id] !== undefined
      );
};
