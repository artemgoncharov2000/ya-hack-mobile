import { fork } from 'redux-saga/effects';

import episodeSaga from './episode/sagas';
import podcastSaga from './podcast/sagas';
import currentItemSaga from './current-item/sagas';

export default function* rootSaga(): WrapGeneratorT<void> {
  yield fork(podcastSaga);
  yield fork(episodeSaga);
  yield fork(currentItemSaga);
}