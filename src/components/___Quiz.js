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
      userAnswer: [],
      answers: [],
      currentQuestion: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true
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
      currentQuestion: this.state.currentQuestion + 1,
      userAnswer: this.state.answer
    });
  };

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    });
  };

  finalQuestionHandler = e => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        quizEnd: true
      });

      e.preventDefault();
      const { answers } = this.state;
      console.log(answers);
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[currentQuestion].question,
          options: quizData[currentQuestion].options,
          answers: quizData[currentQuestion].answer
        };
      });
    }
  }

  render() {
    const {
      questions,
      options,
      currentQuestion,
      userAnswer,
      quizEnd
    } = this.state;

    if (quizEnd) {
      return (
        <Fragment>
          <h2 className="title dark">END</h2>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <form>
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
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            {currentQuestion < quizData.length - 1 && (
              <button
                className="main btn"
                onClick={this.nextQuestionHandler}
                disabled={this.state.disabled}
              >
                Следующий вопрос
              </button>
            )}

            {currentQuestion === quizData.length - 1 && (
              <button
                type="submit"
                className="main btn"
                onClick={this.finalQuestionHandler}
              >
                Отправить заявку
              </button>
            )}
          </div>
        </form>
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