import { FETCH_USERS, ANSWER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
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
    default:
      return state;
  }
}
