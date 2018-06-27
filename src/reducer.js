import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";

// importing all reducers
import customersListReducer from "./reducers/customersList.reducer";

// main reducer combiner
export default combineReducers({
  routing: routerReducer,
  customers: customersListReducer
});
