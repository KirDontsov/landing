import axios from "axios";

export const setQuestions = () => dispatch => {
  axios.get("/quiz.json").then(({ data }) => {
    dispatch({
      type: "SET_QUESTIONS",
      payload: data
    });
  });
};
