import { _getQuestions, _getUsers } from "../api/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

import { setQuestions } from "./questions";
import { setUsers } from "./users";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then((values) => {
      dispatch(setQuestions(values[0]));
      dispatch(setUsers(values[1]));
      dispatch(hideLoading());
    });
  };
};
