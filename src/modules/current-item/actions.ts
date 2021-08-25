import {EpisodeItemT} from "../episode/model";

export const types = {
  SET_CURRENT_ITEM: 'current-item/SET_CURRENT_ITEM',
  GET_POLL_RESULT: 'current-item/GET_POLL_RESULT',
};

export const setCurrentItem = (currentItem: EpisodeItemT | null) =>
  ({type: types.SET_CURRENT_ITEM, currentItem} as const);

export const getPollResult = (id: string, answers: Array<number>) =>
  ({type: types.GET_POLL_RESULT, id, answers} as const);

export type SetCurrentItemAction = ReturnType<typeof setCurrentItem>;
export type GetPollResultAction = ReturnType<typeof getPollResult>;

export type ActionT =
  | SetCurrentItemAction
  | GetPollResultAction