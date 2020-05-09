import { _getQuestions, _getUsers } from "../api/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

import { fetchQuestions } from "./questions";
import { fetchUsers } from "./users";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then((values) => {
      dispatch(fetchQuestions(values[0]));
      dispatch(fetchUsers(values[1]));
      dispatch(hideLoading());
    });
  };
};
