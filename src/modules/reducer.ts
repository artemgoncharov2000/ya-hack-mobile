import episode from './episode/reducer';
import {EpisodeStateT} from "./episode/model";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  episode,
});

export default rootReducer;

export interface RootState {
  episode: EpisodeStateT;
}
