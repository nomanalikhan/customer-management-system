import { fork } from "redux-saga/effects";
import customersListWatcher from "./sagas/customersList.saga";

// Here, we register our watcher saga(s) and export as a single generator
// function (rootSaga) as our root Saga.
export default function* rootSaga() {
  yield fork(customersListWatcher);
}
