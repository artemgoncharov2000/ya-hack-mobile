import {RootState} from "../reducer";
import {PodcastStateT} from "./model";

export const selectPodcast = (state: RootState): PodcastStateT => state.podcast;