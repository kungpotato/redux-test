import { combineReducers } from "redux";
import { numberReducer } from "./reducers/numberReducer";

const mainStore = combineReducers({
  numberReducer,
  // todos
});

export default mainStore;
