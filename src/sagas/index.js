import { all } from 'redux-saga/effects';

import pronunciationSaga from './pronunciation';

export default function* () {
  yield all([...pronunciationSaga]);
}
