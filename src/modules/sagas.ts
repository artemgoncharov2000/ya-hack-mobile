import { fork } from 'redux-saga/effects';

import episodeSaga from './episode/sagas';

export default function* rootSaga(): WrapGeneratorT<void> {
  yield fork(episodeSaga);
}