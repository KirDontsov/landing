import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as quizActions from "../actions/quiz";
import { quizData } from "../quizData";
// import axios from "axios";
// import _ from "lodash";
import "../scss/Quiz.scss";

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      userUnswer: null,
      currentQuestion: 0,
      options: []
    };
  }

  loadQuiz() {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: quizData[currentQuestion].question,
        options: quizData[currentQuestion].options,
        answers: quizData[currentQuestion].answer
      };
    });
  }

  nextQuestionHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          questions: quizData[currentQuestion].question,
          options: quizData[currentQuestion].options,
          answers: quizData[currentQuestion].answer
        };
      });
    }
  }

  render() {
    const { questions, options, currentQuestion, userAnswer } = this.state;
    return (
      <Fragment>
        <div className="quiz__card">
          <h2 className="title dark">{questions}</h2>
          <span>{`Вопрос ${currentQuestion} из ${quizData.length - 1}`}</span>
          <div className="options__group">
            {options.map((option, i) => (
              <div
                key={i}
                className={`option btn ${
                  userAnswer === option ? "selected" : null
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          <div className="main btn" onClick={this.nextQuestionHandler}>
            Следующий вопрос
          </div>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = ({ quiz }) => ({
//   quiz: quiz.questions,
//   isReady: quiz.isReady
// });

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(quizActions, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default Quiz;
