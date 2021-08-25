import {PodcastStateT} from "./model";
import {types as t} from './actions';
import {ActionT} from './actions';
const initialState: PodcastStateT = null;

export default (state = initialState, action: ActionT) => {
  switch (action.type) {
    case t.LOAD_PODCAST_SUCCESS: {
      // @ts-ignore
      const { podcast } = action;
      return {
        ...podcast
      }
    }
    case t.LOAD_PODCAST_FAILURE: {
      console.log('Failed to load episode');
      console.log('Reason: ', action.error);
      return state;
    }
    default: {
      return state;
    }
  }
};