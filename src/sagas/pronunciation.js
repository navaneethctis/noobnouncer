import { call, fork, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/pronunciation';

import * as api from '../apis/merriamWebster';

function* findPronunciation({ payload }) {
  try {
    const { data } = yield call(api.findPronunciation, payload);

    yield put(actions.setPronunciation(data[0].hwi.prs[0]));

    yield put(actions.setHistory(payload));
  } catch (error) {
    yield put(actions.setErrorMessage(error.message));
  }
}

function* watchfindPronunciation() {
  yield takeLatest(actions.types.FIND_PRONUNCIATION, findPronunciation);
}

export default [fork(watchfindPronunciation)];
