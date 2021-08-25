import episode from './episode/reducer';
import currentItem from './current-item/reducer';
import podcast from './podcast/reducer';
import {EpisodeStateT} from "./episode/model";
import {combineReducers} from "redux";
import {CurrentItemStateT} from "./current-item/model";
import {PodcastStateT} from "./podcast/model";

const rootReducer = combineReducers({
  podcast,
  episode,
  currentItem,
});

export default rootReducer;

export interface RootState {
  podcast: PodcastStateT;
  episode: EpisodeStateT;
  currentItem: CurrentItemStateT,
}
