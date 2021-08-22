import * as api from '../../lib/api-client/api-client';
import { takeEvery, put, call} from 'redux-saga/effects';
import {types as t, loadEpisodeFailure, loadEpisodeSuccess, LoadEpisodeAction} from "./actions";


function* loadEpisodeSaga({guid}: LoadEpisodeAction): WrapGeneratorT<void> {
  try {
    const res = yield call(api.getEpisode, guid);
    const episode = res.data;

    yield put(loadEpisodeSuccess(episode));
  } catch (error) {
    yield put(loadEpisodeFailure(error.toString()));
  }
}

function* episodeSaga() {
  yield takeEvery(t.LOAD_EPISODE_REQUEST, loadEpisodeSaga);
}

export default episodeSaga;