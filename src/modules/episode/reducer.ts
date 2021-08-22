import {LoadEpisodeSuccessAction, types as t} from './actions';
import {EpisodeStateT, ItemEnum} from "./model";
import {ActionT} from "./model";

const initialState: EpisodeStateT = {
  podcastId: '',
  guid: '',
  episodeNumber: 0,
  title: '',
  duration: 0,
  url: '',
  description: '',
  published: false,
  items: null,
}

export default (state = initialState, action: ActionT): EpisodeStateT => {
  switch (action.type) {
    case t.LOAD_EPISODE_SUCCESS: {
      const { episode } = action;
      return {
        ...episode
      }
    }
    case t.LOAD_EPISODE_FAILURE: {
      console.log('Failed to load episode');
      console.log('Reason: ', action.error);
      return state;
    }

    default: {
      return state;
    }

  }
}