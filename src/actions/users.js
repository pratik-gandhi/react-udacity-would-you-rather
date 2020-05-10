export const SET_USERS = "SET_USERS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function addQuestionToUser(authedUser, qid) {
  return {
    type: ADD_QUESTION_TO_USER,
    authedUser,
    qid,
  };
}
