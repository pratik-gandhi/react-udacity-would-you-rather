import {
  SET_USERS,
  ANSWER_QUESTION,
  ADD_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser]["answers"],
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { authedUser : user, qid : id} = action;
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user]["questions"].concat(id),
        },
      };
    default:
      return state;
  }
}
