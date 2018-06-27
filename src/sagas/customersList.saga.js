import { push } from "react-router-redux";
import { put, takeLatest, call } from "redux-saga/effects";
import _ from "lodash";

import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED,
  GET_CUSTOMER_DETAILS,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILED,
  UPDATE_CUSTOMER_DETAILS,
  UPDATE_CUSTOMER_DETAILS_SUCCESS,
  UPDATE_CUSTOMER_DETAILS_FAILED,
  CREATE_NEW_CUSTOMER,
  CREATE_NEW_CUSTOMER_SUCCESS,
  CREATE_NEW_CUSTOMER_FAILED,
  REMOVE_CUSTOMER,
  REMOVE_CUSTOMER_SUCCESS,
  REMOVE_CUSTOMER_FAILED
} from "../actions/constants";

import * as api from "../services/customers.service";

function* getCustomers() {
  try {
    const { data } = yield call(api.getCustomers);
    if (!_.isEmpty(data)) {
      yield put({
        type: GET_CUSTOMERS_SUCCESS,
        payload: { customersList: data }
      });
    }
  } catch (error) {
    yield put({ type: GET_CUSTOMERS_FAILED, payload: { error } });
  }
}

function* getCustomerDetails({ payload }) {
  try {
    const { data } = yield call(api.getCustomerDetails, payload.cid);
    if (!_.isEmpty(data)) {
      yield put({
        type: GET_CUSTOMER_DETAILS_SUCCESS,
        payload: { details: data }
      });
    }
  } catch (error) {
    yield put({ type: GET_CUSTOMER_DETAILS_FAILED, payload: { error } });
  }
}

function* updateCustomerDetails({ payload }) {
  try {
    const { cid, formData } = payload;
    const { data } = yield call(api.updateCustomerDetails, {
      id: cid,
      formData
    });
    if (!_.isEmpty(data)) {
      yield put({
        type: UPDATE_CUSTOMER_DETAILS_SUCCESS,
        payload: { details: data }
      });
      yield put(push("/customers"));
    }
  } catch (error) {
    yield put({ type: UPDATE_CUSTOMER_DETAILS_FAILED, payload: { error } });
  }
}

function* createCustomer({ payload }) {
  try {
    const { formData } = payload;
    const { data } = yield call(api.createCustomer, {
      formData
    });

    if (!_.isEmpty(data)) {
      yield put({
        type: CREATE_NEW_CUSTOMER_SUCCESS,
        payload: { details: data }
      });

      yield put(push("/customers"));
    }
  } catch (error) {
    yield put({ type: CREATE_NEW_CUSTOMER_FAILED, payload: { error } });
  }
}

function* removeCustomer({ payload }) {
  try {
    yield call(api.removeCustomer, { id: payload.cid });

    yield put({
      type: REMOVE_CUSTOMER_SUCCESS
    });

    yield getCustomers();
  } catch (error) {
    yield put({ type: REMOVE_CUSTOMER_FAILED, payload: { error } });
  }
}

// Watches for action types asynchronously
export default function* customersListWatcher() {
  yield takeLatest(GET_CUSTOMERS, getCustomers);
  yield takeLatest(GET_CUSTOMER_DETAILS, getCustomerDetails);
  yield takeLatest(UPDATE_CUSTOMER_DETAILS, updateCustomerDetails);
  yield takeLatest(CREATE_NEW_CUSTOMER, createCustomer);
  yield takeLatest(REMOVE_CUSTOMER, removeCustomer);
}
