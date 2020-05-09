export const FETCH_USERS = "FETCH_USERS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        users
    }
}

export function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}