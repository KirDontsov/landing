const initialState = {
  answers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return {
        ...state,
        answers: [...state.answers, action.payload]
      };

    // case "NEXT_ANSWER":
    //   return {
    //     ...state,
    //     isReady: action.payload
    //   };

    default:
      return state;
  }
};
