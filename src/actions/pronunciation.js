export const types = {
  FIND_PRONUNCIATION: 'FIND_PRONUNCIATION',
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_HISTORY: 'SET_HISTORY',
  SET_PRONUNCIATION: 'SET_PRONUNCIATION'
};

export const findPronunciation = term => ({
  payload: term,
  type: types.FIND_PRONUNCIATION
});

export const setErrorMessage = errorMessage => ({
  payload: errorMessage,
  type: types.SET_ERROR_MESSAGE
});

export const setHistory = pronunciation => ({
  payload: pronunciation,
  type: types.SET_HISTORY
});

export const setPronunciation = pronunciation => ({
  payload: pronunciation,
  type: types.SET_PRONUNCIATION
});
