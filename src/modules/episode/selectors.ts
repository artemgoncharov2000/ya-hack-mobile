import {EpisodeStateT} from "./model";
import {RootState} from "../reducer";

export const selectEpisode = (state: RootState): EpisodeStateT => state.episode;
