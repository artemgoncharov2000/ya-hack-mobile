import {RootState} from "../reducer";
import {CurrentItemStateT} from "./model";

export const selectCurrentItem = (state: RootState): CurrentItemStateT => state.currentItem;