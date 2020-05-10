export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const MARK_QUESTION_ANSWERED = "MARK_QUESTION_ANSWERED";

export const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    questions,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  };
};

export const markQuestionAnswered = (authedUser, qid, answer) => {
  return {
    type: MARK_QUESTION_ANSWERED,
    authedUser,
    qid,
    answer,
  };
};
