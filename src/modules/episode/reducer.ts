import {types as t} from './actions';
import {EpisodeStateT, ItemEnum} from "./model";
import {ActionT} from "./actions";

const initialState: EpisodeStateT = {
  podcastId: '',
  guid: '',
  episodeNumber: 0,
  title: '',
  duration: 0,
  url: '',
  defaultImageUrl: '',
  description: '',
  published: false,
  items: null,
}

export default (state = initialState, action: ActionT): EpisodeStateT => {
  switch (action.type) {
    case t.LOAD_EPISODE_SUCCESS: {
      // @ts-ignore
      const { episode } = action;
      return {
        ...episode
      }
    }
    case t.SET_EPISODE_GUID: {
      const { guid } = action;
      return {
        ...state,
        guid: guid,
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