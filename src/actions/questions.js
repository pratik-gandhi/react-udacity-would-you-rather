export const FETCH_QUESTIONS = "FETCH_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export const fetchQuestions = (questions) => {
    return {
        type: FETCH_QUESTIONS,
        questions
    }
}

export const addQuestion = ({question, authedUser}) => {
    return {
        type: ADD_QUESTION,
        question,
        authedUser
    }
}

export const answerQuestion = ({qid, authedUser, answer}) => {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        answer
    }
}
