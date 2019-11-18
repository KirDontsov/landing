import { combineReducers } from "redux";
import quiz from "./quiz";
import answers from "./answers";

export default combineReducers({
  quiz,
  answers
});