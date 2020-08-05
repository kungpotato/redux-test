const { PLUS_NUMBER, MINUS_NUMBER } = require("../actions");

export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case PLUS_NUMBER:
      return state + 1;
    case MINUS_NUMBER:
      return state - 1;
    default:
      return state;
  }
};
