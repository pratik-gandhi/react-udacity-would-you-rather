import React from "react";
import { connect } from "react-redux";

import Question from "./Question"

class QuestionsContainer extends React.Component {
  render() {
    
    const { questions, authedUser } = this.props
    return (
      <div className="question-container">
          {
              Object.keys(questions)
                .filter(key => questions.hasOwnProperty(key))
                .map(key => questions[key])
                .map(question => (<Question key={question.id} question={question}/>))
                // .map(question => (
                //     <div>
                //         <div> Author - {question.author} </div>
                //         <div>Id - { question.id}</div>
                //         <div>Option 1 - {question.optionOne.text} : Selected by {question.optionOne.votes.length} </div>
                //         <div>Option 2 - {question.optionTwo.text} : Selected by {question.optionTwo.votes.length} </div>
                //     </div>
                    
                // ))
          }
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, questions}) => {
    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsContainer);
