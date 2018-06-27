import { fromJS } from "immutable";
import {
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILED
} from "../actions/constants";

const initialState = fromJS({
  customersList: [],
  details: {}
});

function customersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS_SUCCESS:
      return state.set("customersList", action.payload.customersList);
    case GET_CUSTOMERS_FAILED:
      return state.set("customersList", fromJS([]));
    case GET_CUSTOMER_DETAILS_SUCCESS:
      return state.set("details", action.payload.details);
    case GET_CUSTOMER_DETAILS_FAILED:
      return state.set("details", fromJS([]));
    default:
      return state;
  }
}

export default customersListReducer;
