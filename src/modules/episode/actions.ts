import {EpisodeStateT} from "./model";

export const types = {
  LOAD_EPISODE_REQUEST: 'episode/LOAD_EPISODE_REQUEST',
  LOAD_EPISODE_SUCCESS: 'episode/LOAD_EPISODE_SUCCESS',
  LOAD_EPISODE_FAILURE: 'episode/LOAD_EPISODE_FAILURE',
  SET_EPISODE_GUID: 'episode/SET_EPISODE_GUID',
}

export const loadEpisode = (guid: string) =>
  ({type: types.LOAD_EPISODE_REQUEST, guid} as const);

export const loadEpisodeSuccess = (episode: EpisodeStateT) =>
  ({
    type: types.LOAD_EPISODE_SUCCESS,
    episode,
  } as const);

export const loadEpisodeFailure = (error: string) =>
  ({
    type: types.LOAD_EPISODE_FAILURE,
    error,
  })

export const setEpisodeGuid = (guid: string) =>
  ({
    type: types.SET_EPISODE_GUID,
    guid,
  })

export type LoadEpisodeAction = ReturnType<typeof loadEpisode>;
export type LoadEpisodeSuccessAction = ReturnType<typeof loadEpisodeSuccess>;
export type LoadEpisodeFailureAction = ReturnType<typeof loadEpisodeFailure>;
export type SetEpisodeGuidAction = ReturnType<typeof setEpisodeGuid>;

export type ActionT =
  | LoadEpisodeAction
  | LoadEpisodeSuccessAction
  | LoadEpisodeFailureAction
  | SetEpisodeGuidAction
