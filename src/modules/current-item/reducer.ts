import {types as t} from './actions'
import {ActionT} from "./model";
import {CurrentItemStateT} from "./model";

const initialState: CurrentItemStateT | null = null;

export default (state = initialState, action: ActionT): CurrentItemStateT | null=> {
  switch (action.type) {
    case t.SET_CURRENT_ITEM:

      const { currentItem } = action;

      if (!currentItem) {
        return null;
      }

      return {
        ...currentItem,
      };
    default: {
      return state;
    }
  }
}