import * as api from '../../lib/api-client/api-client';
import { takeEvery, put, call} from 'redux-saga/effects';
import {types as t, GetPollResultAction, setCurrentItem} from "./actions";

function* getPollResultSaga({id, answers}: GetPollResultAction): WrapGeneratorT<void> {
  try {
    const res = yield call(api.getPollResult, id, answers);
    const currentItem = res.data;

    yield put(setCurrentItem(currentItem));
  } catch (error) {
    console.log(error);
  }
}

function* currentItemSaga() {
  yield takeEvery(t.GET_POLL_RESULT, getPollResultSaga);
}

export default currentItemSaga;