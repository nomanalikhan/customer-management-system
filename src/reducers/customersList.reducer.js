import { fromJS } from "immutable";
import {
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED
} from "../actions/constants";

const initialState = fromJS({
  customersList: []
});

function customersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS_SUCCESS:
      return state.set("customersList", action.payload.customersList);
    case GET_CUSTOMERS_FAILED:
      return state.set("customersList", fromJS([]));
    default:
      return state;
  }
}

export default customersListReducer;
