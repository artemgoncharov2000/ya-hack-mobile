import {EpisodeStateT} from "./model";
import {RootState} from "../reducer";
import keyBy from 'lodash/keyBy';

export const selectEpisode = (state: RootState): EpisodeStateT => state.episode;
export const getItemsByKey = (state: RootState) => keyBy(state.episode.items, 'timeStart');
export const getCurrentGuid = (state: RootState): string => state.episode.guid;
export const getTimesEnd = (state: RootState) => keyBy(state.episode.items, 'timeEnd');