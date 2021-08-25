import {types as t, LoadPodcastAction, loadPodcastFailure, loadPodcastSuccess, loadPodcast} from "./actions";
import {call, takeEvery, put} from "redux-saga/effects";
import * as api from '../../lib/api-client/api-client';

function* loadPodcastSaga({podcastId}: LoadPodcastAction): WrapGeneratorT<void> {
  try {
    const res = yield call(api.getPodcast, podcastId);
    const podcast = res.data;

    yield put(loadPodcastSuccess(podcast));
  } catch (error) {
    yield put(loadPodcastFailure(error.toString()));
  }
}

function* podcastSaga() {
  yield takeEvery(t.LOAD_PODCAST_REQUEST, loadPodcastSaga);
}

export default podcastSaga;