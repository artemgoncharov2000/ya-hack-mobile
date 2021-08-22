import episode from './episode/reducer';
import currentItem from './current-item/reducer';
import {EpisodeStateT} from "./episode/model";
import {combineReducers} from "redux";
import {CurrentItemStateT} from "./current-item/model";

const rootReducer = combineReducers({
  episode,
  currentItem,
});

export default rootReducer;

export interface RootState {
  episode: EpisodeStateT;
  currentItem: CurrentItemStateT,
}
