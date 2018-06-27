/*
Put customerList specific actions here
*/

import { GET_CUSTOMERS, GET_CUSTOMER_DETAILS, UPDATE_CUSTOMER_DETAILS } from "./constants";

export const getCustomers = () => ({
  type: GET_CUSTOMERS
});

export const getCustomerDetails = cid => ({
  type: GET_CUSTOMER_DETAILS,
  payload: { cid }
});

export const updateCustomerDetails = payload => ({
  type: UPDATE_CUSTOMER_DETAILS,
  payload
});
