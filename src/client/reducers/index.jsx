import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import rovers from './rovers'

export default combineReducers({
  rovers,
  form: formReducer,
});
