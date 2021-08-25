import {ActionT as EpisodeAction} from "./episode/actions";
import {ActionT as CurrentItemAction} from "./current-item/actions";
import {ActionT as PodcastAction} from "./podcast/actions";

export type ActionT =
  | EpisodeAction
  | CurrentItemAction
  | PodcastAction


