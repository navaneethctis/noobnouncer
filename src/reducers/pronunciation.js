import { types } from '../actions/pronunciation';

const INITIAL_STATE = {
  errorMessage: null,
  history: [],
  pronunciation: null
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload
      };
    case types.SET_HISTORY:
      return {
        ...state,
        history: state.history.includes(payload)
          ? [payload, ...state.history.filter(term => term !== payload)]
          : [...state.history, payload]
      };
    case types.SET_PRONUNCIATION:
      return {
        ...state,
        pronunciation: payload
      };
    default:
      return state;
  }
};
