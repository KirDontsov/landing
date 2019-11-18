const initialState = {
  questions: null,
  isReady: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        questions: action.payload,
        isReady: true
      };

    case "SET_IS_READY":
      return {
        ...state,
        isReady: action.payload
      };

    default:
      return state;
  }
};
