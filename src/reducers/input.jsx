const setInputValue = "SetInputValue";

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case setInputValue:
      return action.payload;
    default:
      return state;
  }
};

export default inputReducer;
