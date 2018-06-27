import _ from "lodash";
import { fromJS } from "immutable";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILED
} from "../actions/constants";

import * as api from "../services/customers.service";

function* getCustomers() {
  try {
    const { data } = yield call(api.getCustomers);
    if (!_.isEmpty(data)) {
      yield put({
        type: GET_CUSTOMERS_SUCCESS,
        payload: { customersList: fromJS(data) }
      });
    }
  } catch (error) {
    yield put({ type: GET_CUSTOMERS_FAILED, payload: { error } });
  }
}

// Watches for action types asynchronously
export default function* customersListWatcher() {
  yield takeLatest(GET_CUSTOMERS, getCustomers);
}
