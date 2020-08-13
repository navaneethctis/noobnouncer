import { combineReducers } from 'redux';

import pronunciationReducer from './pronunciation';

export default combineReducers({
  pronunciation: pronunciationReducer
});
