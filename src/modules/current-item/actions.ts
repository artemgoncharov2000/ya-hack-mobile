import {EpisodeItemT} from "../episode/model";

export const types = {
  SET_CURRENT_ITEM: 'current-item/SET_CURRENT_ITEM',
};

export const setCurrentItem = (currentItem: EpisodeItemT) =>
  ({type: types.SET_CURRENT_ITEM, currentItem} as const);

export type SetCurrentItemAction = ReturnType<typeof setCurrentItem>;

export type ActionT =
  | SetCurrentItemAction