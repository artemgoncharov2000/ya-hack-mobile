import {PodcastStateT} from "./model";

export const types = {
  LOAD_PODCAST_REQUEST: 'podcast/LOAD_PODCAST_REQUEST',
  LOAD_PODCAST_SUCCESS: 'podcast/LOAD_PODCAST_SUCCESS',
  LOAD_PODCAST_FAILURE: 'podcast/LOAD_PODCAST_FAILURE',
}

export const loadPodcast = (podcastId: string) =>
  ({type: types.LOAD_PODCAST_REQUEST, podcastId} as const);

export const loadPodcastSuccess = (podcast: PodcastStateT) =>
  ({
    type: types.LOAD_PODCAST_SUCCESS,
    podcast,
  } as const);

export const loadPodcastFailure = (error: string) =>
  ({
    type: types.LOAD_PODCAST_FAILURE,
    error,
  })

export type LoadPodcastAction = ReturnType<typeof loadPodcast>;
export type LoadPodcastSuccessAction = ReturnType<typeof loadPodcastSuccess>;
export type LoadPodcastFailureAction = ReturnType<typeof  loadPodcastFailure>;

export type ActionT =
  | LoadPodcastAction
  | LoadPodcastSuccessAction
  | LoadPodcastFailureAction