import {ActionT as EpisodeAction} from "./episode/actions";
import {ActionT as CurrentItemAction} from "./current-item/actions";

export type ActionT =
  | EpisodeAction
  | CurrentItemAction

