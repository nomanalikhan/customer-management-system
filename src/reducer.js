import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

// main reducer combiner
export default combineReducers({
  routing: routerReducer
})
