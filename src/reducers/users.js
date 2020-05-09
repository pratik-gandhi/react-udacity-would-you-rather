import { SET_USERS, ANSWER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action;
      console.log(
        `Users :: User ${authedUser} :: Question ${qid} :: Answer ${answer}`
      );
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
