import {EpisodeT} from "./model";

export const types = {
  LOAD_EPISODE_REQUEST: 'episode/LOAD_EPISODE_REQUEST',
  LOAD_EPISODE_SUCCESS: 'episode/LOAD_EPISODE_SUCCESS',
  LOAD_EPISODE_FAILURE: 'episode/LOAD_EPISODE_FAILURE',
}

export const loadEpisode = () =>
  ({type: types.LOAD_EPISODE_REQUEST} as const);

export const loadEpisodeSuccess = (episode: EpisodeT) =>
  ({
    type: types.LOAD_EPISODE_SUCCESS,
    episode,
  } as const);

export const loadEpisodeFailure = (error: string) =>
  ({
    type: types.LOAD_EPISODE_FAILURE,
    error,
  })
